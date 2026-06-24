"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Rectangle } from "./rectangle";

interface LayerPreviewProps {
  id: string;
  // onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  onLayerPointerDown: () => void;
  selectionColor?: string;
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers[id]);

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Path:
        return (
          // <Path
          //   key={id}
          //   points={layer.points}
          //   onPointerDown={(e) => onLayerPointerDown(e, id)}
          //   x={layer.x}
          //   y={layer.y}
          //   fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          //   stroke={selectionColor}
          // />
          <div></div>
        );
      case LayerType.Note:
        return (
          // <Note
          //   id={id}
          //   layer={layer}
          //   onPointerDown={onLayerPointerDown}
          //   selectionColor={selectionColor}
          // />
          <div></div>
        );
      case LayerType.Text:
        return (
          // <Text
          //   id={id}
          //   layer={layer}
          //   onPointerDown={onLayerPointerDown}
          //   selectionColor={selectionColor}
          // />
          <div></div>
        );
      case LayerType.Ellipse:
        return (
          // <Ellipse
          //   id={id}
          //   layer={layer}
          //   onPointerDown={onLayerPointerDown}
          //   selectionColor={selectionColor}
          // />
          <div></div>
        );
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
      
        );
      default:
        console.warn("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
