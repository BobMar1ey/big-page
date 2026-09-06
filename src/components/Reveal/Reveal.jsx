import React from "react";
import useInView from "../../hooks/useInView";
import "./Reveal.css";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, isVisible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
