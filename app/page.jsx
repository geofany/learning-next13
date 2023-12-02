import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Dashboard
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum, delectus similique qui ea iste commodi itaque adipisci, tempore soluta excepturi consequuntur quisquam possimus vero! Ex repudiandae distinctio magnam exercitationem?
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">
            View Tickets
          </button>
        </Link>
      </div>

      <h2>
        Company Updates
      </h2>

      <div className="card">
        <h3>
          New Member of the web dev team ...
        </h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit numquam distinctio optio sequi at culpa veritatis temporibus dolores commodi? Iusto sapiente mollitia perspiciatis vel magni delectus temporibus excepturi iure porro.
        </p>
      </div>
      <div className="card">
        <h3>
          New Website Live!
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ratione esse corporis rerum expedita deleniti nobis tempore repellat totam. Quam fugit quaerat quia? Porro iusto, ut quia suscipit temporibus alias!
        </p>
      </div>
    </main>
  )
}
