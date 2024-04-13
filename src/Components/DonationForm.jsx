export default function DonationForm() {
  return (
  <form>
    <div>
    <label htmlFor="">Name</label><br />
    <input type="text"></input>
    </div>
    <div>
    <label htmlFor="">Caption</label><br />
    <input type="text"></input>
    </div>
    <div>
    <label htmlFor="">Amount</label><br />
    <input type="text"></input>
    </div>
    <br />
    <button>Donate!</button>
  </form>
  );
}
