import Head from "next/head";
import { Inter } from "next/font/google";
import Page from "../styled-components/components/Page/index";
import PageHeader from "../styled-components/components/PageHeader/index";
import PageSection from "../styled-components/components/PageSection/index";
import { Container } from "../styled-components/components/Container/index";
import { dropdownData } from "./dashboard/dropdown-menu-data";
import FirstRow from "./dashboard/FirstRow";
import SecondRow from "./dashboard/SecondRow";
import ThirdRow from "./dashboard/ThirdRow";
import FourthRow from "./dashboard/FourthRow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Volvo: Dashboard</title>
        <meta name="description" content="Volvo Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Container>
          <PageHeader
            title="Management Dashboard"
            tagline="Cyber Security"
            dropdownData={dropdownData}
          />
        </Container>
        <PageSection>
          <FirstRow />
        </PageSection>
        <PageSection headline="Security Awareness">
          <SecondRow />
        </PageSection>
        <PageSection headline="Backup rating">
          <ThirdRow />
        </PageSection>
        <PageSection>
          <FourthRow />
        </PageSection>
      </Page>
    </>
  );
}
