import React, { useState } from "react";
import { Button, Modal, Navbar } from "flowbite-react";

export default function TestFlowbit() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold">MyApp</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
        </div>
      </Navbar>

      <main className="mt-6">
        <h1 className="text-2xl font-bold">Welcome to Flowbite + React</h1>
        <p className="mt-2 text-gray-600">ตัวอย่างการใช้ modal จาก flowbite-react</p>
      </main>

      <Modal show={open} onClose={() => setOpen(false)}>
        <Modal.Header>Example Modal</Modal.Header>
        <Modal.Body>
          <p className="text-sm text-gray-500">
            นี่คือตัวอย่าง modal จาก flowbite-react — ใช้ state ของ React ควบคุมการเปิด/ปิด
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpen(false)}>Close</Button>
          <Button>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
