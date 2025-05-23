import { VStack } from '@chakra-ui/react';
import { BarChart } from '../components/reporting/bar-chart';
import { useAuth } from '../hooks/useAuth';
import { PageLayout } from '../components/page-layout';
import React from 'react';
import { Box } from '@chakra-ui/react';

export const PtReporting: React.FC = () => {
  const auth = useAuth();
  if (auth.isLoading) {
    return <Box />;
  } else {
    return (
      <PageLayout>
        <VStack h={500} justify="center" spacing={8}>
          <BarChart />
        </VStack>
      </PageLayout>
    );
  }
};
