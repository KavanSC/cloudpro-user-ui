import React, { useEffect, useState } from "react";

import { SrgnCompliance } from "../components/srgndash/srgn-compliance"
import { SrgnFilter } from "../components/srgndash/srgn-filter"
import { SrgnMyPtGrouping } from "../components/srgndash/srgn-pt-my-grouping"


export const SurgeonPagePatients: React.FC = () => {
  return (
    <>
      <SrgnCompliance/>
      <SrgnFilter/>

      <SrgnMyPtGrouping/>
    </>
  );
};
