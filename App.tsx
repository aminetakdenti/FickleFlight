import * as React from 'react';
import BootSplash from 'react-native-bootsplash';

import Layout from './src';

export default function App() {
  React.useEffect(() => {
    async function hideSplash() {
      await BootSplash.hide({fade: true});
    }
    hideSplash();
  }, []);
  return <Layout />;
}
