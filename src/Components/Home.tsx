import React from "react";
import {
  Layout,
  HeroArea,
  Transparency,
  Partners,
  Introducing,
  ZapBond,
  Store,
  StakingAPY,
} from "./index";
import SmallBusiness from "./SmallBusiness/SmallBusiness";
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
          <Partners />
        </section>
        <section>
          <Introducing />
        </section>
        <section>
          <SmallBusiness />
        </section>

        <section>
          <Transparency />
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
