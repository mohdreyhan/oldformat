import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <p>
        ATMECS makes intelligent and sustainable products in IoT which helps to
        Capture, Monitor, Manage and Analyze the IoT Data.
      </p>
      <br />
      <Link to="/home">homepage</Link>
    </div>
  );
}
