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
import Team from "./Team/Team";

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
          <ZapBond />
        </section>
        <section>
          <Store />
        </section>

        <section>
          <Team />
        </section>
        <section>
          <StakingAPY />
        </section>
        {/* <section>
          <Works />
        </section> */}
      </main>
    </Layout>
  );
};

export default Home;
