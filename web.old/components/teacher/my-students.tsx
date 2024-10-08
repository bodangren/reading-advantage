"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TableHead } from "@mui/material";
import { Input } from "@/components/ui/input";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

type Student = {
  id: string;
  email: string;
  name: string;
};

type MyStudentProps = {
 matchedStudents: Student[];
};

export default function MyStudents({
  matchedStudents,
}: MyStudentProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const t = useScopedI18n("components.articleRecordsTable");
  const ts = useScopedI18n("components.myStudent");
  const [selectedStudentId, setSelectedStudentId] = useState(null);  
const router = useRouter(); 
const [isOpen, setIsOpen] = useState(false);
const [isResetModalOpen, setIsResetModalOpen] = useState(false);
const [redirectUrl, setRedirectUrl] = useState('');

let action = '';  

const closeDialog = () => {
  setIsOpen(false);
};

useEffect(() => {
  if (redirectUrl) {
    router.push(redirectUrl);
  }
}, [selectedStudentId, action, redirectUrl, router]);

const handleActionSelected = (action: string, studentId: string) => {
  switch (action) { 
    case 'progress':
      setRedirectUrl(`/teacher/student-progress/${studentId}`);
      break;
    case 'enroll':
      setRedirectUrl(`/teacher/enroll-classes/${studentId}`);
      break;
    case 'unenroll':
      setRedirectUrl(`/teacher/unenroll-classes/${studentId}`);
      break;
    default:
      console.log('default');
      break;
  }
};

const openResetModal = (selectedStudentId: null) => {
    setIsResetModalOpen(true);
    setSelectedStudentId(selectedStudentId);
};

const closeResetModal = () => {
  setIsResetModalOpen(false);
};

const handleResetProgress = async (selectedStudentId: string) => {
  closeResetModal();
  try {
    const response = await fetch(`/api/users/${selectedStudentId}`, {
      method: "PATCH",
      body: JSON.stringify({
        xp: 0,
        level: 0,
        cefrLevel: "",
      }),
    });
  
    return new Response(
      JSON.stringify({
        message: "success",
      }),
      { status: 200 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          message: error,
        }),
        { status: 500 }
        );
      }
  finally {
    closeDialog();
    router.refresh();
  }
};

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {ts("name")}
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const studentName: string = row.getValue("name");
        return (
          <div className="captoliza ml-4" onClick={() => row.toggleSelected}>{
            studentName ? studentName : "Anonymous"
          }
          </div>
        )
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return <Button variant="ghost">{ts('email')}</Button>;
      },
      cell: ({ row }) => {
        const studentEmail: string = row.getValue("email");
        return (
          <div className="captoliza ml-4">{studentEmail ? studentEmail : "Unknown"}</div>
        )
      }
    },
    {
      accessorKey: "id",
      header: ({ column }) => {
        return null;
      },
      cell: ({ row }) => null,
    },
    {
      accessorKey: "action",
      header: ({ column }) => {
        return <Button variant="ghost">{ts('actions')}</Button>;
      },
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="ml-auto">
              {ts('actions')} <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem onClick={() => handleActionSelected('progress', row.getValue('id') )}>
              <Link href={redirectUrl}>{ts('progress')}</Link>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleActionSelected('enroll', row.getValue('id'))}>
              <Link href={redirectUrl} >{ts('enroll')}</Link>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleActionSelected('unenroll', row.getValue('id'))}>
              <Link href={redirectUrl} >{ts('unEnroll')}</Link>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => openResetModal(row.getValue('id'))}>
              {ts('resetProgress')}
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const table = useReactTable({
    data: matchedStudents,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  
  return (
    <>
    {isResetModalOpen && (
      <Dialog open={isResetModalOpen} onOpenChange={setIsResetModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{ts('resetTitle')}</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {ts('resetDescription')}
          </DialogDescription>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => closeResetModal()}
            >
              {ts('cancelReset')}
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleResetProgress(selectedStudentId ?? "")}
            >
              {ts('reset')}
            </Button>
          </DialogFooter>
        </DialogContent>  
      </Dialog>
    )}
      <div className="font-bold text-3xl">{ts('title')}</div>
      <Input
        placeholder={ts('searchName')}
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm mt-4"
      />
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader className="font-bold">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id}>
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="cursor-pointer"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}
                    onClick={() => setSelectedStudentId(cell.getContext().cell.row.getValue('id'))}
                   >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Empty
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {t("select", {
            selected: table.getFilteredSelectedRowModel().rows.length,
            total: table.getFilteredRowModel().rows.length,
          })}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t("previous")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {t("next")}
          </Button>
        </div>
      </div>
    </>
  );
}
