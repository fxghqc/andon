import React from 'react';
import { useState, useEffect } from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Switch, Route } from 'react-router-dom';
import ky from 'ky';

import token from '../components/token';
import CenterLayout from '../components/CenterLayout';
import BreadSplitor from '../components/BreadSplitor';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedCard from '../components/AnimatedCard';

const Grid = styled('div')`
  display: flex;
  margin: 0 -1rem;
`;

const GridItem = styled('div')`
  width: 25%;
  margin: 0 1rem;
`;

const Part = ({ show, name, go }) => {
  return (
    <AnimatedCard show={show}>
      <div className={css`
        height: 15rem;
      `}
        onClick={go}
      >
        {name}
      </div>
    </AnimatedCard>
  );
};

const Material = ({ match, history, location }) => {
  const [show, setShow] = useState(true);
  const [part, setPart] = useState({});
  const name = match.params.name || 'root';
  useEffect(() => {
    // eslint-disable-next-line
    const json = ky.post(
      `http://localhost:8282/api/collections/get/material?token=${token}`,
      {
        json: {
            filter: { name },
            populate: 1 // resolve linked collection items
        },
      },
    ).json().then(json => {
      const p = json.entries[0] || {};
      setPart(p);
    });
  }, []);

  const { animate = true } = location.state || {};

  const breads = match.url.slice(1).split('/');

  return (
    <CenterLayout>
      <AnimatedTitle
        show
        disabled={!animate}
        className={css`position: relative; z-index: 10;`}
      >
        <h3>
        {breads
          .map((bread, index) => (
            index === breads.length - 1
              ? <big key={bread}>{bread}</big>
              : (
                <React.Fragment key={bread}>
                  <span
                    onClick={() => {
                      setShow(false);
                      setTimeout(
                        () => history.push(`/${breads.slice(0, index + 1).join('/')}`, { animate: false }),
                        750,
                      );
                    }}
                    style={{ color: 'rgb(241,196,57)', textDecoration: 'none' }}
                  >
                    {bread}
                  </span>
                  <BreadSplitor />
                </React.Fragment>
              )
          ))
        }
        </h3>
      </AnimatedTitle>
      <Grid>
        {Array.isArray(part.children) &&
          part.children.map(item => (
            <GridItem key={item._id}>
              <Part
                show={show}
                {...item}
                go={() => {
                  setShow(false);
                  setTimeout(
                    () => history.push(`${match.url}/${item.name}`, { animate: false }),
                    750,
                  );
                }}
              />
            </GridItem>
          ))
        }
      </Grid>
    </CenterLayout>
  );
};

const MaterialRoute = ({ match, history }) => {
  return (
    <Switch>
      <Route path={`${match.url}/:name`} component={MaterialRoute} />
      <Route path="" component={Material} />
    </Switch>
  );
}

export default MaterialRoute;
