
import { NextPage } from 'next';
import React from 'react';
import AuthCheck from '@/components/molecules/AuthCheck/AuthCheck';
import Gallerie from '@/components/organism/Gallerie/Gallerie';

const IndexTodo: NextPage = () => {
  return (
    <AuthCheck>
      <Gallerie/>
    </AuthCheck>
  );
}

export default IndexTodo;