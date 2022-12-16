import { Contact } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { BlockContact } from './BlockContact/BlockContact';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#212121',
      }}
    >
      <Section title="Phonebook">
        <Contact />
      </Section>
      <Section title="Contacts">
        <Filter />
        <BlockContact />
      </Section>
    </div>
  );
}
