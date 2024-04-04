import React, { useEffect, useState, Suspense, lazy } from 'react';
import Upcomingevents from './Upcomingevents';

const Upcominglist = () => {
    const Upcomingevents = lazy(() => import("./Upcomingevents"));

  return (
    <Suspense fallback={<div>Loading....</div>}>
        <Upcomingevents />
    </Suspense>
  )
}

export default Upcominglist