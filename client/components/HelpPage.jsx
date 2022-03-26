import React from 'react';

const HelpPage = ({ setShowHelp }) => {
  return (
    <div className='tall w-100 p-2 p-sm-5'>
      <button type='button' className='btn-close position-absolute top-0 end-0' onClick={() => setShowHelp(false)}></button>
      <article>
        <p>Information describing the sites and it's uses.</p>
        <p>Do not upload inapropriate photos or your account will be locked. (as per Sam)</p>
        <p>Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis, et sic non tangetur, si aut ex eis moriatur.</p>
        <p>Quando ambulabat agendis admonere te qualis actio. Si ad corpus, quae plerumque Imaginare tecum in balinea quidam aquam fundes aliquod discrimen vituperiis usum alii furantur</p>
      </article>
      <button type='button' className='btn btn-secondary' onClick={() => setShowHelp(false)}>Cool!</button>
    </div>
  )
}

export default HelpPage;
