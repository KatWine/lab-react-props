export default function Progress({donations,targetAmount}) {
  const total = donations.reduce((sum, personObj)=> sum + personObj.amount,0);
    const nextId = donations.length + 1;
  return (
    <div>
      <h2>Raised ${total} of ${targetAmount}</h2>
      <p>You could be donation #{nextId}!</p>
    </div>
  )
}
