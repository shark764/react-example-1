import React from 'react';
import PropTypes from 'prop-types';

const contacts = [
  { number: '+123456789', name: 'Jimmy Paige' },
  { number: '+155667788', name: 'Jimmy Hendrix' },
  { number: '+122334455', name: 'Tony Iommi' },
  { number: '+112233441', name: 'Ronnie James Dio' },
  { number: '+112233442', name: 'Robert Halford' },
  { number: '+112233443', name: 'Lemmy Kilmister' },
  { number: '+112233444', name: 'Klaus Meine' },
  { number: '+112233445', name: 'Joan Jett' },
  { number: '+112233446', name: 'Freddie Mercury' },
  { number: '+112233447', name: 'Angus Young' },
  { number: '+112233448', name: 'Billy Idol' },
  { number: '+112233449', name: 'Jim Morrison' },
  { number: '+112233440', name: 'David Bowie' },
];

function Output({ output }) {
  const contactFound = contacts.find((contact) => contact.number === output);

  return (
    <div className="dialpad-output">
      <span>{output}</span>

      {contactFound && (
        <div className="dialpad-contact-found">{contactFound.name}</div>
      )}
    </div>
  );
}
Output.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Output;
