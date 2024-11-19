import { useState } from "react"

export const AccordionItem = ({ num, title }) => {

  const [open, setOpen] = useState(true)

  return (
    <div className={`item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="header">
        <p className="number">{num}</p>
        <p className="title">{title}</p>
        <p className="icon">{open ? "-" : "+"}</p>
      </div>
      {open && <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus ea eius eos labore non laborum velit vel distinctio debitis asperiores, expedita at iusto, dolor dicta neque. Ipsa, labore molestias.</p>}

    </div>
  )
}