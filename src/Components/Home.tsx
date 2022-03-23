import React from "react";
import {
  Layout,
  HeroArea,
  Portraait,
  Introducing,
  ZapBond,
  Works,
  Store,
  StakingAPY,
} from "./index";

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroArea />
      <main>
        {/* <section>
          <Portraait />
        </section> */}
        <section>
          <Introducing />
        </section>
        <section>
          <StakingAPY />
        </section>
        {/* <section>
          <Store />
        </section>
        <section>
          <ZapBond />
        </section> */}
        {/* <section>
          <Works />
        </section> */}
      </main>
    </Layout>
  );
};

export default Home;
