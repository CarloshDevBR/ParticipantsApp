import Home from './src/screens/Home';

import { ProviderParticipant } from './src/context';

export default function App() {
  return (
    <ProviderParticipant>
      <Home />
    </ProviderParticipant>
  );
}
