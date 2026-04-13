import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[var(--menu)] flex flex-col items-center">
      <p className="m-3">© 2025 Athénaïs Lecomte - Tous droits réservés.</p>
      <Link className="m-3 block" to="/mentions-legales">Mentions légales</Link>
    </div>
  );
}