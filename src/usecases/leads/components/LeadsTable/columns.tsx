"use client";

import type { ColumnDef } from "@tanstack/react-table";

import type { Lead } from "../../types";
import { SortControl } from "./SortControl";
import { TextContent } from "./TextContent";
import { DateContent } from "./DateContent";

export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <SortControl
          sort={column.getIsSorted()}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        </SortControl>
      );
    },
    cell: ({ row }) => {
      return <TextContent>{row.getValue("name")}</TextContent>;
    },
  },
  {
    accessorKey: "submitted",
    header: ({ column }) => {
      return (
        <SortControl
          sort={column.getIsSorted()}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Submitted
        </SortControl>
      );
    },
    cell: ({ row }) => {
      return <DateContent date={row.getValue("submitted")} />;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <SortControl
          sort={column.getIsSorted()}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
        </SortControl>
      );
    },
    cell: ({ row }) => {
      return <TextContent>{row.getValue("status")}</TextContent>;
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <SortControl
          sort={column.getIsSorted()}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
        </SortControl>
      );
    },
    cell: ({ row }) => {
      return <TextContent>{row.getValue("country")}</TextContent>;
    },
  },
];
