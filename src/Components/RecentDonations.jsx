export default function RecentDonations({donations}) {
  const donators =donations.map(personObj => {
    const {amount,caption,name}= personObj;
    return(
      <div>
        <p>{name} donated ${amount}</p>
        <p>{caption}</p>
      </div>
    )
  })
  return (
    <>
    <div>
      <h2>Recent Donations</h2>
      
    </div>
    {donators}
    </>
  );
}
