"use client";

import { useState } from "react";
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { Pagination } from "@/components/Pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";

import { LeadStatus, type Lead } from "../../types";
import { columns } from "./columns";

interface LeadsTableProps {
  data: Lead[];
}

export function LeadsTable({ data }: LeadsTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
  });

  const statusFilterValue =
    (table.getColumn("status")?.getFilterValue() as string) ?? "";

  const handleStatusFilterChange = (value: string) => {
    if (value === "unset") {
      table.getColumn("status")?.setFilterValue(undefined);
    } else {
      table.getColumn("status")?.setFilterValue(value);
    }
  };

  const handleGlobalFilterChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(ev.target.value);
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search"
          value={globalFilter}
          onChange={handleGlobalFilterChange}
          className="h-9 w-56 py-2"
        />

        <Select value={statusFilterValue} onValueChange={handleStatusFilterChange}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="unset">Status</SelectItem>
              <SelectItem value={LeadStatus.PENDIN}>Pending</SelectItem>
              <SelectItem value={LeadStatus.REACHED_OUT}>Reached Out</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="h-12 px-12">
              <div className="flex items-center justify-end">
                <Pagination totalPages={3} />
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
