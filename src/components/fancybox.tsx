import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import { PropsWithChildren, useEffect, useRef } from "react";

// FancyboxProps - Props for the Fancybox wrapper component
interface FancyboxProps {
  options?: Partial<OptionsType>; // Optional configuration options for Fancybox
  delegate?: string; // Optional CSS selector to target child elements
}

// Fancybox - Wraps children and binds Fancybox behavior to them via a ref
const Fancybox = (props: PropsWithChildren<FancyboxProps>) => {
  const containerRef = useRef(null); // Ref to the container element for Fancybox binding

  useEffect(() => {
    const container = containerRef.current; // Get current DOM node from ref

    const delegate = props.delegate || "[data-fancybox]"; // Use provided delegate or fallback to default
    const options = props.options || {}; // Use provided options or fallback to empty config

    NativeFancybox.bind(container, delegate, options); // Bind Fancybox to matching child elements within the container

    return () => {
      NativeFancybox.unbind(container); // Unbind Fancybox on cleanup
      NativeFancybox.close(); // Close any open Fancybox instances
    };
  });

  return <div ref={containerRef}>{props.children}</div>; // Render container wrapping children with ref binding
};

export default Fancybox;
