import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { useState, useEffect, createContext, useContext, useMemo, useCallback, useRef, forwardRef } from "react";
import { usePage, Link, router, useForm, Head, createInertiaApp } from "@inertiajs/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ChevronLeft, Hotel, HandPlatter, ReceiptText, Megaphone, TicketMinus, Users, LayoutGrid, BookmarkCheck, Archive, ChevronDown, Dot, Ellipsis, MenuIcon, Inbox, User, Languages, LogOut, Bell, CalendarPlus, CircleMinus, CirclePlus, Bold, Italic, Underline, Strikethrough, List, ListOrdered, Minus, WrapText, Undo, Redo, Heading1, Heading2, Heading3, Pilcrow, Link2, MoreHorizontal, HandCoins, Ticket, Eye, ArrowLeft, ArrowRight, Pencil, Trash, ImagePlus, ChevronUp, Send, Printer, FileDown, ClipboardList, Settings2, MessageSquareX, Check, X, LoaderCircle, Phone, Mail, MapPin, Facebook, Instagram, BedSingle, ChevronRight } from "lucide-react";
import { useTranslation, initReactI18next, I18nextProvider } from "react-i18next";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronRightIcon, CheckIcon, DotFilledIcon, Cross2Icon, SunIcon, MoonIcon, ChevronLeftIcon, CalendarIcon, ChevronDownIcon, ArrowLeftIcon, ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon, MixerHorizontalIcon, MagnifyingGlassIcon, CaretSortIcon, DragHandleDots2Icon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Drawer as Drawer$1 } from "vaul";
import { format, isBefore } from "date-fns";
import { fr as fr$1 } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as ToastPrimitives from "@radix-ui/react-toast";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import useEmblaCarousel from "embla-carousel-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline$1 from "@tiptap/extension-underline";
import Link$1 from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween.js";
import { Command as Command$1 } from "cmdk";
import { FileUploader } from "react-drag-drop-files";
import * as ResizablePrimitive from "react-resizable-panels";
import { Transition } from "@headlessui/react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as SelectPrimitive from "@radix-ui/react-select";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import i18n from "i18next";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const useStore = (store, callback) => {
  const result = store(callback);
  const [data, setData2] = useState();
  useEffect(() => {
    setData2(result);
  }, [result]);
  return data;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:opacity-90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:opacity-90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const useSidebarToggle = create(
  persist(
    (set, get) => ({
      isOpen: true,
      setIsOpen: () => {
        set({ isOpen: !get().isOpen });
      }
    }),
    {
      name: "sidebarOpen",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
function SidebarToggle({ isOpen, setIsOpen }) {
  return /* @__PURE__ */ jsx("div", { className: "invisible lg:visible absolute top-[12px] -right-[16px] z-20", children: /* @__PURE__ */ jsx(
    Button,
    {
      onClick: () => setIsOpen == null ? void 0 : setIsOpen(),
      className: "rounded-md w-8 h-8",
      variant: "outline",
      size: "icon",
      children: /* @__PURE__ */ jsx(
        ChevronLeft,
        {
          className: cn(
            "h-4 w-4 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )
        }
      )
    }
  ) });
}
function getMenuList(pathname) {
  const { t } = useTranslation("translation", {
    keyPrefix: "layout.sideBar"
  });
  const permissions = usePage().props.auth.permissions;
  const roomsPathnames = [
    "rooms.index",
    "rooms.create",
    "features.index",
    "rooms.edit",
    "rooms.show"
  ];
  const servicesPathnames = [
    "services.index",
    "services.show",
    "services.create",
    "services.edit",
    "consumptions.index"
  ];
  const promoPathnames = [
    "promotions.index",
    "promotions.create",
    "promotions.edit"
  ];
  const usersPathnames = [
    "roles.index",
    "roles.create",
    "roles.edit",
    "users.index",
    "users.create",
    "users.edit"
  ];
  const rolesPathnames = ["roles.index", "roles.create", "roles.edit"];
  const userPathnames = ["users.index", "users.create", "users.edit"];
  const facturePathnames = ["factures.index", "factures.show"];
  const eventPathnames = ["events.index", "events.create", "events.edit"];
  const propritaireGroup = {
    groupLabel: t("owner"),
    menus: [
      (permissions.room.viewAny || permissions.room.update || permissions.room.create) && {
        href: "rooms.index",
        label: t("rooms"),
        active: roomsPathnames.includes(pathname),
        icon: Hotel,
        submenus: [
          {
            href: "rooms.index",
            label: t("allRooms"),
            active: pathname === "rooms.index"
          },
          {
            href: "features.index",
            label: t("features"),
            active: pathname === "features.index"
          }
        ]
      },
      (permissions.service.viewAny || permissions.service.update || permissions.service.delete || permissions.service.create) && {
        href: "services.index",
        label: t("services"),
        active: servicesPathnames.includes(pathname),
        icon: HandPlatter,
        submenus: [
          {
            href: "services.index",
            label: t("allServices"),
            active: pathname === "services.index"
          },
          {
            href: "consumptions.index",
            label: t("consumption"),
            active: pathname === "consumptions.index"
          }
        ]
      },
      (permissions.facture.viewAny || permissions.facture.update || permissions.facture.delete || permissions.facture.create) && {
        href: "factures.index",
        label: t("bills"),
        active: facturePathnames.includes(pathname),
        icon: ReceiptText,
        submenus: []
      },
      (permissions.event.viewAny || permissions.event.update || permissions.event.delete || permissions.event.create) && {
        href: "events.index",
        label: t("events"),
        active: eventPathnames.includes(pathname),
        icon: Megaphone,
        submenus: []
      },
      (permissions.promotion.viewAny || permissions.promotion.update || permissions.promotion.delete || permissions.promotion.create) && {
        href: "promotions.index",
        label: t("promotions"),
        active: promoPathnames.includes(pathname),
        icon: TicketMinus,
        submenus: []
      }
    ].filter(Boolean)
  };
  const managementGroup = {
    groupLabel: t("managment"),
    menus: [
      (permissions.employ.viewAny || permissions.employ.update || permissions.employ.delete || permissions.employ.create || permissions.role.viewAny || permissions.role.update || permissions.role.delete || permissions.role.create) && {
        href: "roles.index",
        label: t("users"),
        active: usersPathnames.includes(pathname),
        icon: Users,
        submenus: [
          (permissions.role.viewAny || permissions.role.update || permissions.role.delete || permissions.role.create) && {
            href: "roles.index",
            label: t("roles"),
            active: rolesPathnames.includes(pathname)
          },
          (permissions.employ.viewAny || permissions.employ.update || permissions.employ.delete || permissions.employ.create) && {
            href: "users.index",
            label: t("employs"),
            active: userPathnames.includes(pathname)
          }
        ]
      }
    ].filter(Boolean)
  };
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "admin.dashboard",
          label: t("dashboard"),
          active: pathname === "admin.dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    (permissions.booking.viewAny || permissions.booking.update || permissions.booking.create) && {
      groupLabel: t("bookingsGroupe"),
      menus: [
        permissions.booking.viewAny && {
          href: "bookings.index",
          label: t("bookings"),
          active: pathname == "bookings.index",
          icon: BookmarkCheck,
          submenus: []
        },
        permissions.booking.viewAny && {
          href: "bookings.historique",
          label: t("historical"),
          active: pathname == "bookings.historique",
          icon: Archive,
          submenus: []
        }
      ]
    },
    propritaireGroup.menus.length > 0 && propritaireGroup,
    managementGroup.menus.length > 0 && managementGroup
  ].filter(Boolean);
}
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(DotFilledIcon, { className: "h-4 w-4 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen
}) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState(isSubmenuActive);
  return isOpen ? /* @__PURE__ */ jsxs(
    Collapsible,
    {
      open: isCollapsed,
      onOpenChange: setIsCollapsed,
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx(
          CollapsibleTrigger,
          {
            className: "[&[data-state=open]>div>div>svg]:rotate-180 mb-1",
            asChild: true,
            children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                className: cn(
                  "w-full justify-start h-10",
                  active ? "text-primary hover:text-primary" : ""
                ),
                children: /* @__PURE__ */ jsxs("div", { className: "w-full items-center flex justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "mr-4", children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: cn(
                          "max-w-[150px] truncate",
                          isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                        ),
                        children: label
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "whitespace-nowrap",
                        isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                      ),
                      children: /* @__PURE__ */ jsx(
                        ChevronDown,
                        {
                          size: 18,
                          className: "transition-transform duration-200"
                        }
                      )
                    }
                  )
                ] })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(CollapsibleContent, { className: "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down", children: submenus.map(
          ({ href, label: label2, active: active2 }, index, item) => item[index] && /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              className: cn(
                "w-full justify-start h-10 mb-1 hover:border-2 hover:border-transparent",
                active2 ? "text-primary hover:text-primary" : ""
              ),
              asChild: true,
              children: /* @__PURE__ */ jsxs(Link, { href: route(href), children: [
                /* @__PURE__ */ jsx("span", { className: "mr-4 ml-2", children: /* @__PURE__ */ jsx(Dot, { size: 18 }) }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: cn(
                      "max-w-[170px] truncate",
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                    ),
                    children: label2
                  }
                )
              ] })
            },
            index
          )
        ) })
      ]
    }
  ) : /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          className: cn(
            "w-full justify-start h-10 mb-1 hover:border-2 hover:border-transparent",
            active ? "text-primary hover:text-primary" : ""
          ),
          children: /* @__PURE__ */ jsx("div", { className: "w-full items-center flex justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  isOpen === false ? "" : "mr-4"
                ),
                children: /* @__PURE__ */ jsx(Icon, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: cn(
                  "max-w-[200px] truncate",
                  isOpen === false ? "opacity-0" : "opacity-100"
                ),
                children: label
              }
            )
          ] }) })
        }
      ) }) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "right", align: "start", alignOffset: 2, children: label })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { side: "right", sideOffset: 25, align: "start", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "max-w-[190px] truncate", children: label }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      submenus.map(({ href, label: label2 }, index) => /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { className: "cursor-pointer", href: route(href), children: /* @__PURE__ */ jsx("p", { className: "max-w-[180px] truncate", children: label2 }) }) }, index)),
      /* @__PURE__ */ jsx(DropdownMenuArrow, { className: "fill-border" })
    ] })
  ] });
}
function Menu({ isOpen }) {
  const pathname = route().current();
  const menuList = getMenuList(pathname);
  return /* @__PURE__ */ jsx(ScrollArea, { className: "[&>div>div[style]]:!block", children: /* @__PURE__ */ jsx("nav", { className: "mt-8 h-full w-full", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2", children: menuList.map(
    (list, index) => list != false && /* @__PURE__ */ jsxs(
      "li",
      {
        className: cn(
          "w-full",
          list.groupLabel ? "pt-5" : ""
        ),
        children: [
          isOpen && list.groupLabel || isOpen === void 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate", children: list.groupLabel }) : !isOpen && isOpen !== void 0 && list.groupLabel ? /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { className: "w-full", children: /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ jsx(Ellipsis, { className: "h-5 w-5" }) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { side: "right", children: /* @__PURE__ */ jsx("p", { children: list.groupLabel }) })
          ] }) }) : /* @__PURE__ */ jsx("p", { className: "pb-2" }),
          list.menus.map(
            ({
              href,
              label,
              icon: Icon,
              active,
              submenus
            }, index2, item) => item[index2] && (submenus.length === 0 ? /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full",
                children: /* @__PURE__ */ jsx(
                  TooltipProvider,
                  {
                    disableHoverableContent: true,
                    children: /* @__PURE__ */ jsxs(
                      Tooltip,
                      {
                        delayDuration: 100,
                        children: [
                          /* @__PURE__ */ jsx(
                            TooltipTrigger,
                            {
                              asChild: true,
                              children: /* @__PURE__ */ jsx(
                                Button,
                                {
                                  className: cn(
                                    "w-full justify-start h-10 mb-1 hover:border-2 hover:border-transparent",
                                    active ? "text-primary hover:text-primary " : ""
                                  ),
                                  variant: "ghost",
                                  asChild: true,
                                  children: /* @__PURE__ */ jsxs(
                                    Link,
                                    {
                                      href: route(
                                        href
                                      ),
                                      children: [
                                        /* @__PURE__ */ jsx(
                                          "span",
                                          {
                                            className: cn(
                                              isOpen === false ? "" : "mr-4"
                                            ),
                                            children: /* @__PURE__ */ jsx(
                                              Icon,
                                              {
                                                size: 18
                                              }
                                            )
                                          }
                                        ),
                                        /* @__PURE__ */ jsx(
                                          "p",
                                          {
                                            className: cn(
                                              "max-w-[200px] truncate",
                                              isOpen === false ? "-translate-x-96 opacity-0" : "translate-x-0 opacity-100"
                                            ),
                                            children: label
                                          }
                                        )
                                      ]
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          isOpen === false && /* @__PURE__ */ jsx(TooltipContent, { side: "right", children: label })
                        ]
                      }
                    )
                  }
                )
              },
              index2
            ) : /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full",
                children: /* @__PURE__ */ jsx(
                  CollapseMenuButton,
                  {
                    icon: Icon,
                    label,
                    active,
                    submenus,
                    isOpen
                  }
                )
              },
              index2
            ))
          )
        ]
      },
      index
    )
  ) }) }) });
}
function AppLogo({ className }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "/assets/sidi-el-noui-logo.png",
      alt: "Logo",
      className
    }
  );
}
const appName$1 = "Sidi El Noui";
function SideBar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  if (!sidebar)
    return null;
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        (sidebar == null ? void 0 : sidebar.isOpen) === false ? "w-[90px]" : "w-72"
      ),
      children: [
        /* @__PURE__ */ jsx(
          SidebarToggle,
          {
            isOpen: sidebar == null ? void 0 : sidebar.isOpen,
            setIsOpen: sidebar == null ? void 0 : sidebar.setIsOpen
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: cn(
                "transition-transform ease-in-out duration-300 mb-1",
                (sidebar == null ? void 0 : sidebar.isOpen) === false ? "translate-x-1" : "translate-x-0"
              ),
              variant: "link",
              asChild: true,
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("admin.dashboard"),
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(AppLogo, { className: "h-10 w-10" }),
                    /* @__PURE__ */ jsx(
                      "h1",
                      {
                        className: cn(
                          "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                          (sidebar == null ? void 0 : sidebar.isOpen) === false ? "-translate-x-96 opacity-0 hidden" : "translate-x-0 opacity-100"
                        ),
                        children: appName$1
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(Menu, { isOpen: sidebar == null ? void 0 : sidebar.isOpen })
        ] })
      ]
    }
  );
}
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Close,
      {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
        children: [
          /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ]
      }
    ),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const appName = "Sidi El Noui";
function SheetMenu() {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(
      SheetTrigger,
      {
        className: cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "lg:hidden h-8"
        ),
        children: /* @__PURE__ */ jsx(MenuIcon, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsxs(
      SheetContent,
      {
        className: "sm:w-72 px-3 h-full flex flex-col",
        side: "left",
        "aria-describedby": void 0,
        children: [
          /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsx(SheetTitle, { children: /* @__PURE__ */ jsxs(
            Button,
            {
              className: "flex justify-center items-center w-full gap-2 pt-1",
              variant: "link",
              onClick: () => router.get(route("admin.dashboard")),
              children: [
                /* @__PURE__ */ jsx(AppLogo, { className: "h-10 w-10" }),
                /* @__PURE__ */ jsxs("h1", { className: "font-bold text-lg", children: [
                  appName,
                  " "
                ] })
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsx(Menu, { isOpen: true })
        ]
      }
    )
  ] });
}
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 dark:text-gray-300 ` + className, children: value ? value : children });
}
const LanguageSwitcher = () => {
  const { i18n: i18n2 } = useTranslation();
  const { locale } = usePage().props;
  const changeLanguage = (lng) => {
    i18n2.changeLanguage(lng);
    router.visit(route("switch.lang"), {
      data: { lang: lng },
      preserveState: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs(
    RadioGroup,
    {
      value: locale,
      onValueChange: changeLanguage,
      className: "flex gap-2",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { value: "fr", id: "fr" }),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "fr",
              value: "Français",
              className: "cursor-pointer"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(RadioGroupItem, { value: "ar", id: "ar" }),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "ar",
              value: "العربية",
              className: "cursor-pointer"
            }
          )
        ] })
      ]
    }
  );
};
function RedBeadge({ className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "w-2 h-2 bg-destructive rounded-full absolute top-0  " + className
    }
  );
}
function UserNav$1() {
  const user = usePage().props.auth.user;
  const [processing, setProcessing] = React__default.useState(false);
  const message_permission = usePage().props.auth.permissions.message;
  const hasUnreadMessages = usePage().props.hasUnreadMessages;
  const { t } = useTranslation("translation", {
    keyPrefix: "layout.navBar.userNav"
  });
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "relative h-8 w-8 rounded-full",
          children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 relative", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: "#", alt: "Avatar" }),
              /* @__PURE__ */ jsxs(AvatarFallback, { className: "bg-transparent uppercase", children: [
                user.first_name.charAt(0),
                user.last_name.charAt(0)
              ] })
            ] }),
            hasUnreadMessages && /* @__PURE__ */ jsx(RedBeadge, { className: "right-0" })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxs(TooltipContent, { side: "bottom", children: [
        t("tolip"),
        " "
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium leading-none", children: [
          user.first_name,
          " ",
          user.last_name
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", children: user.email })
      ] }) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsx(
          DropdownMenuItem,
          {
            className: "hover:cursor-pointer",
            disabled: processing,
            asChild: true,
            children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("admin.dashboard"),
                className: "flex items-center",
                onStart: () => setProcessing(true),
                onFinish: () => setProcessing(false),
                children: [
                  /* @__PURE__ */ jsx(LayoutGrid, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
                  t("dashboard")
                ]
              }
            )
          }
        ),
        (message_permission.viewAny || message_permission.update || message_permission.delete || message_permission.create) && /* @__PURE__ */ jsx(
          DropdownMenuItem,
          {
            className: "hover:cursor-pointer",
            asChild: true,
            disabled: processing,
            children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("messages.index"),
                className: "flex items-center",
                onStart: () => setProcessing(true),
                onFinish: () => setProcessing(false),
                children: [
                  hasUnreadMessages ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(Inbox, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
                    /* @__PURE__ */ jsx(RedBeadge, { className: "right-1/3" })
                  ] }) : /* @__PURE__ */ jsx(Inbox, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
                  t("inbox")
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          DropdownMenuItem,
          {
            className: "hover:cursor-pointer",
            asChild: true,
            disabled: processing,
            children: /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("admin.profile.edit"),
                className: "flex items-center",
                onStart: () => setProcessing(true),
                onFinish: () => setProcessing(false),
                children: [
                  /* @__PURE__ */ jsx(User, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
                  t("account")
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
          /* @__PURE__ */ jsx(Languages, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
          /* @__PURE__ */ jsx(LanguageSwitcher, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          disabled: processing,
          onClick: () => {
            router.post(
              route("admin.logout"),
              {},
              {
                onStart: () => setProcessing(true),
                onFinish: () => setProcessing(false)
              }
            );
          },
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
            t("logout")
          ]
        }
      )
    ] })
  ] });
}
const ThemeProviderContext = createContext({
  theme: "light",
  setTheme: () => null
});
function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        className: "rounded-full w-8 h-8 bg-background",
        variant: "outline",
        size: "icon",
        onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
        children: [
          /* @__PURE__ */ jsx(SunIcon, { className: "w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" }),
          /* @__PURE__ */ jsx(MoonIcon, { className: "absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Switch Theme" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(TooltipContent, { side: "bottom", children: [
      t("layout.navBar.themeTolip"),
      " "
    ] })
  ] }) });
}
function NotificationsNav() {
  const notifs = usePage().props.notifs;
  const { t } = useTranslation("translation", {
    keyPrefix: "layout.navBar.notifications"
  });
  function timeSince(date) {
    const now = /* @__PURE__ */ new Date();
    const past = new Date(date);
    const secondsAgo = Math.floor((now - past) / 1e3);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo > 0) {
      return `${daysAgo} jrs`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} h`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} min`;
    } else {
      return `${secondsAgo} s`;
    }
  }
  const ViewNotification = (notif) => {
    router.get(
      route("bookings.show", notif.data.booking_id),
      {},
      {
        onSuccess: () => {
          router.post(route("notifications.read"), { id: notif.id });
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          className: "relative h-8 w-8 rounded-full",
          children: /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: "#", alt: "Avatar" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-transparent uppercase", children: notifs.length > 0 ? /* @__PURE__ */ jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsx(Bell, { size: 18 }),
              /* @__PURE__ */ jsx(RedBeadge, { className: "right-0" })
            ] }) : /* @__PURE__ */ jsx(Bell, { size: 18 }) })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: t("tolip") })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ jsx(DropdownMenuGroup, { children: notifs.slice(0, 10).map((notif, idx) => /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          onClick: () => ViewNotification(notif),
          children: [
            t("new"),
            " ",
            /* @__PURE__ */ jsxs(DropdownMenuShortcut, { children: [
              timeSince(notif == null ? void 0 : notif.created_at),
              " "
            ] })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          onClick: () => {
            router.get(route("notifications.index"));
          },
          children: [
            t("all"),
            " "
          ]
        }
      )
    ] })
  ] });
}
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === toastId || toastId === void 0 ? {
          ...t,
          open: false
        } : t)
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({
  ...props
}) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open)
          dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const Dialog = SheetPrimitive.Root;
const DialogTrigger = SheetPrimitive.Trigger;
const DialogPortal = SheetPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(
          SheetPrimitive.Close,
          {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
            ]
          }
        )
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive.Description.displayName;
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx(Drawer$1.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
const DrawerTrigger = Drawer$1.Trigger;
const DrawerPortal = Drawer$1.Portal;
const DrawerClose = Drawer$1.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("mt-auto flex flex-col gap-2 p-4", className), ...props });
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("span", { ...props, className: "text-sm text-red-600 dark:text-red-400 " + className, children: message }) : null;
}
const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
function Calendar$1({ className, classNames, showOutsideDays = true, ...props }) {
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4" }),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar$1.displayName = "Calendar";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
function DatePickerWithRange({
  date,
  onDateChange,
  className,
  min
}) {
  const { t } = useTranslation();
  const disablePastDates = (date2) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return isBefore(date2, today);
  };
  return /* @__PURE__ */ jsx("div", { className: cn("grid gap-2", className), children: /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        id: "date",
        variant: "outline",
        className: cn(
          " justify-start text-left font-normal bg-card",
          !date && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
          (date == null ? void 0 : date.from) ? date.to ? /* @__PURE__ */ jsxs(Fragment, { children: [
            format(date.from, "LLL dd, y"),
            " -",
            " ",
            format(date.to, "LLL dd, y")
          ] }) : format(date.from, "LLL dd, y") : /* @__PURE__ */ jsxs("span", { children: [
            t("components.datePicker.title"),
            " "
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
      Calendar$1,
      {
        initialFocus: true,
        mode: "range",
        min,
        defaultMonth: date == null ? void 0 : date.from,
        selected: date,
        onSelect: onDateChange,
        numberOfMonths: 2,
        locale: fr$1,
        weekStartsOn: 6,
        disabled: disablePastDates,
        showOutsideDays: false
      }
    ) })
  ] }) });
}
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Input.displayName = "Input";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
function AddBooking() {
  const [dateRange, setDateRange] = useState({
    from: "",
    to: ""
  });
  const { data, get, setData: setData2, processing, setError, errors, clearErrors } = useForm({
    check_in: "",
    check_out: "",
    guest_number: 0,
    is_company: 0
  });
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const { t } = useTranslation("translation", { keyPrefix: "layout.navBar" });
  const e = usePage().props.errors;
  useEffect(() => {
    var _a;
    if (flash.message) {
      setOpen(false);
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  useEffect(() => {
    if (Object.keys(e).length !== 0) {
      setError("check_in", e.check_in);
      setError("check_out", e.check_out);
      setError("guest_number", e.guest_number);
      setOpen(true);
    }
  }, [e]);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const incriment = () => {
    clearErrors("guest_number");
    setData2("guest_number", data.guest_number + 1);
  };
  const dicriment = () => {
    clearErrors("guest_number");
    if (data.guest_number > 0) {
      setData2("guest_number", data.guest_number - 1);
    }
  };
  const handleDateChange = (range) => {
    clearErrors("check_in");
    clearErrors("check_out");
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("check_in", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("check_out", formattedDate);
    }
    setDateRange(range);
  };
  const submit = (e2) => {
    e2.preventDefault();
    get(route("bookings.searchAviableRoom"));
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "link", children: [
        /* @__PURE__ */ jsx(CalendarPlus, { size: 18, className: "mx-2" }),
        t("addBooking")
      ] }) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: t("addBooking") }),
          /* @__PURE__ */ jsx(DialogDescription, { children: t("dialog.dialogDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid items-start gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "dates",
                value: t("dialog.form.dates")
              }
            ),
            /* @__PURE__ */ jsx(
              DatePickerWithRange,
              {
                date: dateRange,
                onDateChange: handleDateChange,
                min: 2
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.check_in,
                className: "mt-2"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.check_out,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx(
                InputLabel,
                {
                  htmlFor: "guest_number",
                  value: t("dialog.form.guestNumber")
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center w-1/4 border rounded p-1 bg-muted", children: [
                /* @__PURE__ */ jsx(
                  CircleMinus,
                  {
                    onClick: () => dicriment(),
                    className: "cursor-pointer hover:text-secondary"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "w-1/2 flex justify-center", children: data.guest_number }),
                /* @__PURE__ */ jsx(
                  CirclePlus,
                  {
                    onClick: () => incriment(),
                    className: "cursor-pointer hover:text-secondary"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.guest_number,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                id: "need_value",
                checked: data.is_company == 1 ? true : false,
                onCheckedChange: () => setData2(
                  "is_company",
                  data.is_company == 1 ? 0 : 1
                )
              }
            ),
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "need_value",
                value: t("dialog.form.needValue")
              }
            )
          ] }),
          /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              type: "submit",
              disabled: processing,
              children: t("dialog.form.submit")
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "link", children: /* @__PURE__ */ jsx(CalendarPlus, { size: 18, className: "mx-2" }) }) }),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
        /* @__PURE__ */ jsx(DrawerTitle, { children: t("addBooking") }),
        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
          " ",
          t("dialog.dialogDescreption")
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "grid items-start gap-4 px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "dates",
              value: t("dialog.form.dates")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.check_in,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.check_out,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "guest_number",
              value: t("dialog.form.guestNumber")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              min: 1,
              id: "guest_number",
              value: data.guest_number,
              onChange: (e2) => setData2("guest_number", e2.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.guest_number,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "need_value",
              checked: data.is_company,
              onCheckedChange: () => setData2("is_company", !data.is_company)
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "need_value",
              value: t("dialog.form.needValue")
            }
          )
        ] }),
        /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            className: "w-full",
            type: "submit",
            disabled: processing,
            children: t("dialog.form.submit")
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
        " ",
        t("dialog.form.cancel")
      ] }) }) })
    ] })
  ] });
}
function Navbar({ isOpen }) {
  const { t } = useTranslation();
  const booking_permission = usePage().props.auth.permissions.booking;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "transition-[margin-left] ease-in-out duration-300",
        isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
      ),
      children: /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-4 sm:mx-8 flex h-14 items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 lg:space-x-0", children: [
          /* @__PURE__ */ jsx(SheetMenu, {}),
          /* @__PURE__ */ jsx("h1", { className: "font-bold", children: t("dashboard.title") })
        ] }),
        /* @__PURE__ */ jsx("div", { children: booking_permission.create && /* @__PURE__ */ jsx(AddBooking, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-end", children: [
          /* @__PURE__ */ jsx(NotificationsNav, {}),
          /* @__PURE__ */ jsx(ThemeToggle, {}),
          /* @__PURE__ */ jsx(UserNav$1, {})
        ] })
      ] }) })
    }
  );
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
function AdminPanelLayout({ children }) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const { toast: toast2 } = useToast();
  const { locale } = usePage().props;
  const { t } = useTranslation("translation", { keyPrefix: "layout" });
  React__default.useEffect(() => {
    document.documentElement.dir = locale == "ar" ? "rtl" : "ltr";
  }, [locale]);
  React__default.useEffect(() => {
    if (typeof Echo !== void 0) {
      const channel = Echo.channel(`booking-channel`);
      channel.listen("NewBooking", (e) => {
        toast2({
          description: e.booking.user.first_name + " " + t("notif")
        });
      });
      return () => {
        channel.stopListening("NewBooking");
      };
    }
  }, [toast2]);
  if (!sidebar)
    return null;
  return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsx(SideBar, {}),
    /* @__PURE__ */ jsx(Navbar, { isOpen: sidebar == null ? void 0 : sidebar.isOpen }),
    /* @__PURE__ */ jsx(
      "main",
      {
        className: cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 md:p-10 p-2 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          (sidebar == null ? void 0 : sidebar.isOpen) === false ? "lg:ml-[90px]" : "lg:ml-72 "
        ),
        children
      }
    ),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function PlaceholderContent({ children, className = "" }) {
  return /* @__PURE__ */ jsx(Card, { className: "rounded-lg border-none mt-2 ", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6 " + className, children }) });
}
function PageHeading({ title, className = "" }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "font-bold text-3xl " + className, children: [
    title,
    " "
  ] }) });
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(
        ChevronDownIcon,
        {
          className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        }
      )
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function LabelDescreption({
  value,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { ...props, className: `text-muted-foreground text-sm ` + className, children: value ? value : children });
}
function FormInput({
  label,
  label_descreption,
  type,
  error,
  data,
  setData: setData2,
  fieldName,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 w-full", children: [
    label_descreption && /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: label, value: label }),
      /* @__PURE__ */ jsx(LabelDescreption, { children: label_descreption })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow", children: [
      /* @__PURE__ */ jsx(InputLabel, { htmlFor: label, value: label }),
      /* @__PURE__ */ jsx(
        Input,
        {
          className: "mt-2 w-full bg-card",
          type,
          id: label,
          value: data,
          onChange: (e) => setData2(fieldName, e.target.value),
          ...props
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: error, className: "mt-2" })
    ] })
  ] });
}
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium me-2 px-3.5 py-0.5 text-xs ",
  {
    variants: {
      variant: {
        default: "border-gray-600 border-2 bg-gray-100 text-gray-600 ",
        success: "border-green-600 border-2 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
        danger: "border-red-600 border-2  bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
        warning: "border-amber-500 border-2 bg-amber-100 text-amber-500 dark:bg-yellow-900 dark:text-yellow-300",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, children, ...props }) {
  return /* @__PURE__ */ jsx("span", { className: cn(badgeVariants({ variant }), className), ...props, children });
}
function AviableRooms$1({ rooms: rooms2, bookingData, services: services2 }) {
  var _a;
  const [count2, setCount] = useState(0);
  const { t } = useTranslation("translation", { keyPrefix: "aviableRooms" });
  const { data, setData: setData2, post, errors, processing } = useForm({
    rooms: [],
    consomation: [],
    check_in: bookingData.check_in,
    check_out: bookingData.check_out,
    guest_number: bookingData.guest_number,
    is_company: bookingData.is_company,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    adresse: "",
    nis: "",
    nif: "",
    nrc: "",
    n_article: ""
  });
  const handleRooms = (room) => {
    setData2((data2) => {
      const roomIndex = data2.rooms.findIndex((r) => r.id === room.id);
      if (roomIndex !== -1) {
        data2.rooms.splice(roomIndex, 1);
      } else {
        data2.rooms.push({ id: room.id, room_price: room.room_price });
      }
      return { ...data2 };
    });
  };
  const increment = (consumption) => {
    setCount(count2 + 1);
    setData2((prevData) => {
      const existingIndex = prevData.consomation.findIndex(
        (c) => c.consumption_id === consumption.consumption_id
      );
      if (existingIndex > -1) {
        prevData.consomation[existingIndex].quantity += 1;
      } else {
        prevData.consomation.push({
          consumption_id: consumption.consumption_id,
          current_consumption_price: consumption.consumption_price,
          quantity: 1
        });
      }
      return { ...prevData };
    });
  };
  const decrement = (consumption_id) => {
    if (count2 > 0) {
      setCount(count2 - 1);
      setData2((prevData) => {
        const existingIndex = prevData.consomation.findIndex(
          (c) => c.consumption_id === consumption_id
        );
        if (existingIndex > -1) {
          if (prevData.consomation[existingIndex].quantity === 1) {
            prevData.consomation.splice(existingIndex, 1);
          } else {
            prevData.consomation[existingIndex].quantity -= 1;
          }
        }
        return { ...prevData };
      });
    }
  };
  const getQuantity = (consumption_id) => {
    const item = data.consomation.find(
      (c) => c.consumption_id === consumption_id
    );
    return item ? item.quantity : 0;
  };
  const handleSetData = (field, value) => {
    setData2((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("bookings.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsxs(PlaceholderContent, { children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        bookingData.is_company == 1 ? /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: t("name"),
              error: errors.first_name,
              type: "text",
              data: data.first_name,
              setData: handleSetData,
              fieldName: "first_name"
            }
          ),
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: t("adress"),
              error: errors.adresse,
              type: "text",
              data: data.adresse,
              setData: handleSetData,
              fieldName: "adresse"
            }
          )
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: t("name"),
              error: errors.first_name,
              type: "text",
              data: data.first_name,
              setData: handleSetData,
              fieldName: "first_name"
            }
          ),
          /* @__PURE__ */ jsx(
            FormInput,
            {
              label: t("lastName"),
              error: errors.last_name,
              type: "text",
              data: data.last_name,
              setData: handleSetData,
              fieldName: "last_name"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        bookingData.is_company == 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: t("nif"),
                error: errors.nif,
                type: "text",
                data: data.nif,
                setData: handleSetData,
                fieldName: "nif"
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: t("nis"),
                error: errors.nis,
                type: "text",
                data: data.nis,
                setData: handleSetData,
                fieldName: "nis"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: t("nrc"),
                error: errors.nrc,
                type: "text",
                data: data.nrc,
                setData: handleSetData,
                fieldName: "nrc"
              }
            ),
            /* @__PURE__ */ jsx(
              FormInput,
              {
                label: t("na"),
                error: errors.n_article,
                type: "text",
                data: data.n_article,
                setData: handleSetData,
                fieldName: "n_article"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Separator, {})
        ] }),
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: t("email"),
            label_descreption: t("emailDescreption"),
            error: errors.email,
            type: "email",
            data: data.email,
            setData: handleSetData,
            fieldName: "email"
          }
        ),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: t("phone"),
            label_descreption: t("phoneDescreption"),
            error: errors.phone,
            type: "text",
            data: data.phone,
            setData: handleSetData,
            fieldName: "phone"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
      /* @__PURE__ */ jsx(InputLabel, { className: "mb-2", children: t("tableHeader") }),
      /* @__PURE__ */ jsxs("table", { className: "table-auto border-collapse w-full border", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: t("roomNumber") }),
          /* @__PURE__ */ jsx("th", { children: t("type") }),
          /* @__PURE__ */ jsxs("th", { children: [
            t("ttc"),
            " "
          ] }),
          /* @__PURE__ */ jsx("th", { children: t("features") })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: rooms2.map((room) => /* @__PURE__ */ jsxs(
          "tr",
          {
            onClick: () => handleRooms(room),
            className: cn(
              "hover:bg-muted text-center border cursor-pointer",
              data.rooms.findIndex(
                (r) => r.id === room.id
              ) !== -1 ? "bg-secondary hover:bg-secondary/90" : ""
            ),
            children: [
              /* @__PURE__ */ jsxs("td", { children: [
                t("roomCode"),
                " ",
                room.room_number
              ] }),
              /* @__PURE__ */ jsx("td", { children: room.type.type_designation }),
              /* @__PURE__ */ jsxs("td", { children: [
                room.room_price,
                " ",
                t("da")
              ] }),
              /* @__PURE__ */ jsx("td", { className: "flex flex-wrap flex-row p-2 ", children: room.features.map((feature) => /* @__PURE__ */ jsxs(Badge, { children: [
                feature.features_name,
                " ",
                feature.need_value == true && " : " + feature.pivot.valeur
              ] })) })
            ]
          },
          room.room_number
        )) })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
      /* @__PURE__ */ jsx(InputLabel, { children: t("cunsumptionHeader") }),
      /* @__PURE__ */ jsxs(Accordion, { type: "multiple", className: "", children: [
        services2.map((service) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: service.service_name,
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { children: service.service_name }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "space-y-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: service.consomation.map(
                (consomation, idx) => {
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex justify-between gap-4 items-center",
                      children: [
                        /* @__PURE__ */ jsx(
                          InputLabel,
                          {
                            value: consomation.consumption_name
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center border rounded p-1 bg-muted", children: [
                          /* @__PURE__ */ jsx(
                            CircleMinus,
                            {
                              onClick: () => decrement(
                                consomation.consumption_id
                              ),
                              className: "cursor-pointer hover:text-secondary"
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { className: "w-1/2 flex justify-center", children: getQuantity(
                            consomation.consumption_id
                          ) }),
                          /* @__PURE__ */ jsx(
                            CirclePlus,
                            {
                              onClick: () => increment(
                                consomation
                              ),
                              className: "cursor-pointer hover:text-secondary"
                            }
                          )
                        ] })
                      ]
                    },
                    consomation.consumption_id
                  );
                }
              ) }) })
            ]
          },
          service.service_id
        )),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: (_a = errors.consomations) == null ? void 0 : _a.message,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          type: "submit",
          onClick: submit,
          disabled: processing,
          children: t("submit")
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AviableRooms$1
}, Symbol.toStringTag, { value: "Module" }));
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y"
  }, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api == null ? void 0 : api.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api == null ? void 0 : api.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api == null ? void 0 : api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsx(
  TogglePrimitive.Root,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;
const FixedMenu = ({
  editor,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex flex-wrap gap-1 border-b p-0.5", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(Items, { editor }),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleBold().run(),
            disabled: !editor.can().chain().focus().toggleItalic().run(),
            pressed: editor.isActive("bold"),
            children: /* @__PURE__ */ jsx(Bold, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleItalic().run(),
            disabled: !editor.can().chain().focus().toggleItalic().run(),
            pressed: editor.isActive("italic"),
            children: /* @__PURE__ */ jsx(Italic, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleUnderline().run(),
            disabled: !editor.can().chain().focus().toggleUnderline().run(),
            pressed: editor.isActive("underline"),
            children: /* @__PURE__ */ jsx(Underline, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleStrike().run(),
            disabled: !editor.can().chain().focus().toggleStrike().run(),
            pressed: editor.isActive("strike"),
            children: /* @__PURE__ */ jsx(Strikethrough, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(LinkButton, { editor }),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            pressed: editor.isActive("bulletList"),
            children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Toggle,
          {
            size: "sm",
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            pressed: editor.isActive("orderedList"),
            children: /* @__PURE__ */ jsx(ListOrdered, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            children: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().setHardBreak().run(),
            children: /* @__PURE__ */ jsx(WrapText, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().undo().run(),
            disabled: !editor.can().chain().focus().undo().run(),
            children: /* @__PURE__ */ jsx(Undo, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => editor.chain().focus().redo().run(),
            disabled: !editor.can().chain().focus().redo().run(),
            children: /* @__PURE__ */ jsx(Redo, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
};
const Items = ({ editor }) => {
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "justify-between", children: [
      editor.isActive("heading") ? editor.isActive("heading", { level: 1 }) ? /* @__PURE__ */ jsx(Heading1, { className: "h-4 w-4" }) : editor.isActive("heading", { level: 2 }) ? /* @__PURE__ */ jsx(Heading2, { className: "h-4 w-4" }) : editor.isActive("heading", { level: 3 }) ? /* @__PURE__ */ jsx(Heading3, { className: "h-4 w-4" }) : null : /* @__PURE__ */ jsx(Pilcrow, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 ml-2" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { loop: true, align: "start", on: true, children: [
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().setParagraph().run(),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          "data-selected": editor.isActive("paragraph"),
          children: [
            /* @__PURE__ */ jsx(Pilcrow, { className: "h-4 w-4" }),
            "Paragraphe"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          "data-selected": editor.isActive("heading", { level: 1 }),
          children: [
            /* @__PURE__ */ jsx(Heading1, { className: "h-4 w-4" }),
            "Titre 1"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          "data-selected": editor.isActive("heading", { level: 2 }),
          children: [
            /* @__PURE__ */ jsx(Heading2, { className: "h-4 w-4" }),
            "Titre 2"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
          "data-selected": editor.isActive("heading", { level: 3 }),
          className: " data-[selected=true]:bg-gray-200/65 cursor-pointer gap-2",
          children: [
            /* @__PURE__ */ jsx(Heading3, { className: "h-4 w-4" }),
            "Titre 3"
          ]
        }
      )
    ] })
  ] });
};
const LinkButton = ({ editor }) => {
  const [href, setHref] = React__default.useState("");
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", children: /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsxs(PopoverContent, { className: "flex items-center gap-2 p-2", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          value: href,
          onValueChange: (value) => setHref(value),
          placeholder: "https://google.dz"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: "ghost",
          onClick: () => editor.commands.setLink({ href }),
          children: "Ajouter"
        }
      )
    ] })
  ] });
};
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
const baseExtensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: true
      // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: true
      // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    document: false
  }),
  Document,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  Underline$1,
  Link$1
];
const RichEditor = ({
  className = "",
  classNames,
  editable = true,
  content,
  onContentChange,
  extensions,
  menu = "top",
  slotBefore,
  slotAfter,
  autofocus,
  spellCheck = true,
  length = 0
}) => {
  const extensionFn = () => {
    if (!extensions)
      return baseExtensions;
    return extensions({
      StarterKit,
      Document,
      Color,
      TextStyle,
      Underline: Underline$1,
      Link: Link$1,
      Placeholder
    });
  };
  const slotBeforeFn = (editor2) => {
    if (slotBefore)
      return slotBefore(editor2);
    if (!editable)
      return /* @__PURE__ */ jsx("div", {});
    if (menu === "top")
      return /* @__PURE__ */ jsx(
        FixedMenu,
        {
          editor: editor2,
          className: cn(classNames == null ? void 0 : classNames.fixedMenu)
        }
      );
    return void 0;
  };
  const slotAfterFn = (editor2) => {
    if (slotAfter)
      return slotAfter(editor2);
    if (menu === "bottom")
      return /* @__PURE__ */ jsx(
        FixedMenu,
        {
          editor: editor2,
          className: cn(classNames == null ? void 0 : classNames.fixedMenu)
        }
      );
    return void 0;
  };
  const onUpdateFn = ({ editor: editor2 }) => {
    onContentChange && onContentChange({
      json: editor2.getJSON(),
      html: editor2.getHTML(),
      text: editor2.getText()
    });
  };
  const editorPropsFn = () => {
    return {
      attributes: {
        class: cn(
          "p-2 prose prose-slate prose-sm sm:prose-base dark:prose-invert prose-a:text-blue-600 max-w-full focus:outline-none min-h-fit max-h-fit resize-y overflow-y-auto first:*:mt-0",
          classNames == null ? void 0 : classNames.content
        ),
        spellCheck: String(spellCheck)
      }
    };
  };
  const editor = useEditor({
    content,
    onUpdate: onUpdateFn,
    extensions: extensionFn(),
    editable,
    autofocus,
    editorProps: editorPropsFn()
  });
  if (length > 0) {
    const textContent = editor.getText().trim();
    if (textContent.length <= length) {
      return textContent;
    }
    return textContent.slice(0, length) + "...";
  }
  if (!editor) {
    return /* @__PURE__ */ jsx(Skeleton, { className: "h-40 w-full" });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "bg-card rounded border",
        className,
        classNames == null ? void 0 : classNames.root
      ),
      children: [
        slotBeforeFn(editor),
        /* @__PURE__ */ jsx(
          EditorContent,
          {
            editor,
            className: cn(classNames == null ? void 0 : classNames.wrapper)
          }
        ),
        slotAfterFn(editor)
      ]
    }
  );
};
function Booking({ booking: booking2 }) {
  const { t } = useTranslation("translation", { keyPrefix: "booking" });
  const totalPrice = () => {
    let total = 0;
    let days = (new Date(booking2.check_out) - new Date(booking2.check_in)) / (1e3 * 60 * 60 * 24);
    booking2.rooms.map((room) => {
      total += room.pivot.room_price * days;
    });
    booking2.consomation.map((consomation) => {
      total += consomation.consumption_price * consomation.pivot.quantity;
    });
    return total;
  };
  console.log(t("title"));
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: t("pageHeading") + booking2.user.first_name + " " + booking2.user.last_name
      }
    ),
    /* @__PURE__ */ jsxs(PlaceholderContent, { className: "flex flex-col md:flex-row gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/3 w-full flex md:flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: t("clientCard") }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              booking2.user.first_name,
              " ",
              booking2.user.last_name,
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { children: booking2.user.email }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: booking2.user.phone })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: t("bookingCard") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "flex justify-between p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                t("checkIn"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking2.check_in }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "12h00 - 23h00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                t("checkOut"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking2.check_out }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "07h00 - 12h00" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("guestNumber"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
              booking2.guest_number,
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: t("adult") }),
            booking2.kids_number ? /* @__PURE__ */ jsxs(Fragment, { children: [
              " ",
              t("and"),
              " ",
              /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                booking2.kids_number,
                " "
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: t("babys") })
            ] }) : null
          ] }) }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col items-start p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t(""),
              " "
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              (new Date(booking2.check_out) - new Date(booking2.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              t("nights")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "p-2 font-bold", children: t("pricingCard") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-2 text-3xl font-bold text-primary", children: [
            totalPrice(booking2.rooms),
            " ",
            t("da")
          ] }),
          /* @__PURE__ */ jsx(CardFooter, { className: "p-2 text-muted-foreground", children: t("pricingFooter") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 w-full h-fit bg-card p-2 pb-6 rounded-lg", children: [
        booking2.rooms.map((room) => /* @__PURE__ */ jsxs(Card, { className: "w-full mb-2", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold p-2 pb-0 flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("rooms"),
              " ",
              room.type.type_designation,
              " ",
              t("with"),
              " ",
              room.beeds_number,
              " ",
              t("beeds")
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
              (new Date(booking2.check_out) - new Date(booking2.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              "x ",
              room.pivot.room_price,
              " ",
              t("da")
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-2 ", children: room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
            Badge,
            {
              className: "m-0 w-autot",
              children: [
                feature.features_name,
                feature.need_value == true && ": " + feature.pivot.valeur
              ]
            },
            feature.feature_id
          )) }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-end p-2 pt-0", children: /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(
              DialogTrigger,
              {
                className: buttonVariants({
                  variant: "link"
                }),
                children: t("showMore")
              }
            ),
            /* @__PURE__ */ jsxs(
              DialogContent,
              {
                className: "p-0",
                "aria-describedby": void 0,
                children: [
                  /* @__PURE__ */ jsx(DialogHeader, { className: "p-0", children: /* @__PURE__ */ jsx(DialogTitle, { className: "p-0", children: /* @__PURE__ */ jsxs(Carousel, { children: [
                    /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map(
                      (asset) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: asset.url,
                          alt: asset.name,
                          className: "w-full"
                        }
                      ) })
                    ) }),
                    /* @__PURE__ */ jsx(CarouselPrevious, {}),
                    /* @__PURE__ */ jsx(CarouselNext, {})
                  ] }) }) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground flex justify-between", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        t("rooms"),
                        " ",
                        room.type.type_designation,
                        " ",
                        t("with"),
                        " ",
                        room.beeds_number,
                        " ",
                        t("beeds")
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                        " ",
                        room.pivot.room_price,
                        " ",
                        t("da")
                      ] })
                    ] }),
                    room.features.length > 0 && /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
                      /* @__PURE__ */ jsx(Separator, {}),
                      /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground pb-2 flex justify-start", children: [
                        t("features"),
                        " :"
                      ] }),
                      room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
                        Badge,
                        {
                          className: "m-0 w-autot",
                          children: [
                            feature.features_name,
                            feature.need_value == true && ": " + feature.pivot.valeur
                          ]
                        },
                        feature.feature_id
                      ))
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
                      /* @__PURE__ */ jsx(Separator, {}),
                      /* @__PURE__ */ jsx(
                        RichEditor,
                        {
                          className: "bg-transparent border-none max-h-[200px] overflow-auto",
                          autofocus: false,
                          editable: false,
                          content: room.room_descreption
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          ] }) })
        ] }, room.room_number)),
        booking2.consomation.map((consomation) => /* @__PURE__ */ jsx(
          Card,
          {
            className: "w-full mb-2",
            children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2 font-bold flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { children: consomation.consumption_name }),
              /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                consomation.pivot.quantity,
                " x",
                " ",
                consomation.consumption_price,
                " ",
                t("da")
              ] })
            ] })
          },
          consomation.consumption_id
        ))
      ] })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Booking
}, Symbol.toStringTag, { value: "Module" }));
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const Pagination = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
function DataTablePagination({ tabledata }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "components.dataTable.pagination"
  });
  const navigateTo = (url) => {
    router.visit(url, {
      preserveState: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-2 mt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex text-sm text-muted-foreground", children: [
      tabledata.to - tabledata.from + 1,
      " / ",
      tabledata.total,
      " ",
      t("footer")
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.prev_page_url,
          onClick: () => navigateTo(tabledata.first_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to first page" }),
            /* @__PURE__ */ jsx(DoubleArrowLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.prev_page_url,
          onClick: () => navigateTo(tabledata.prev_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to previous page" }),
            /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      tabledata.links.slice(1, -1).map((link) => /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: link.active ? "outline" : "ghost",
          className: "h-8 w-8 p-0",
          onClick: () => navigateTo(link.url),
          children: link.label
        }
      ) }, link.label)),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.next_page_url,
          onClick: () => navigateTo(tabledata.next_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to next page" }),
            /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !tabledata.next_page_url,
          onClick: () => navigateTo(tabledata.last_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to last page" }),
            /* @__PURE__ */ jsx(DoubleArrowRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) })
    ] }) }) })
  ] });
}
function DataTableViewOptions({
  table
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "components.dataTable.viewOption"
  });
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxs(
      DropdownMenuTrigger,
      {
        className: buttonVariants({
          variant: "outline",
          size: "sm"
        }) + " ml-auto h-8 lg:flex",
        children: [
          /* @__PURE__ */ jsx(MixerHorizontalIcon, { className: "mr-2 h-4 w-4" }),
          t("show")
        ]
      }
    ),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-fit", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: t("title") }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      table.getAllColumns().filter(
        (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
      ).map((column) => {
        return /* @__PURE__ */ jsx(
          DropdownMenuCheckboxItem,
          {
            checked: column.getIsVisible(),
            onCheckedChange: (value) => column.toggleVisibility(!!value),
            children: t(column.id)
          },
          column.id
        );
      })
    ] })
  ] });
}
function DataTable({
  columns: columns2,
  data,
  paginate,
  selection
}) {
  var _a;
  const [sorting, setSorting] = React__default.useState([]);
  const [columnFilters, setColumnFilters] = React__default.useState([]);
  const [columnVisibility, setColumnVisibility] = React__default.useState({});
  const [rowSelection, setRowSelection] = React__default.useState({});
  const { t } = useTranslation("translation", {
    keyPrefix: "components.dataTable"
  });
  const table = useReactTable({
    data,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: " w-full py-4", children: /* @__PURE__ */ jsx(DataTableViewOptions, { table }) }),
    /* @__PURE__ */ jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ jsx(TableHead, { children: header.isPlaceholder ? null : flexRender(
          header.column.columnDef.header,
          header.getContext()
        ) }, header.id);
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          ) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
        TableCell,
        {
          colSpan: columns2.length,
          className: "h-24 text-center",
          children: "No results."
        }
      ) }) })
    ] }) }),
    selection && /* @__PURE__ */ jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " / ",
      table.getFilteredRowModel().rows.length,
      " ",
      t("viewOption.selection")
    ] }),
    paginate && /* @__PURE__ */ jsx(DataTablePagination, { tabledata: paginate })
  ] });
}
function ColumnHeader({ title }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "components.dataTable.viewOption"
  });
  return /* @__PURE__ */ jsxs("div", { className: "rtl:text-right", children: [
    " ",
    t(title),
    " "
  ] });
}
const historiqueColumns = [
  {
    accessorKey: "client",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-bold text-base", children: [
          booking2.user.first_name,
          " ",
          booking2.user.last_name
        ] }),
        booking2.user.email
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "client" })
  },
  {
    accessorKey: "checkIn",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsx("span", { children: booking2.check_in });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "checkIn" })
  },
  {
    accessorKey: "checkOut",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsx("span", { children: booking2.check_out });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "checkOut" })
  },
  {
    accessorKey: "bookingDate",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        booking2.created_at.split("T")[0],
        " "
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "bookingDate" })
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const booking2 = row.original;
      return booking2.booking_status == "confirmer" ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: booking2.booking_status }) : booking2.booking_status == "en attente" ? /* @__PURE__ */ jsx(Badge, { variant: "warning", children: booking2.booking_status }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: booking2.booking_status });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "status" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking2 = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      const { t } = useTranslation("translation", {
        keyPrefix: "bookings.tableHeader"
      });
      const booking_permission = usePage().props.auth.permissions.booking;
      const handleBookingStatus = (status) => {
        router.post(
          route("bookings.change.status", booking2.booking_id),
          { booking_status: status },
          {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
              setopen(false);
            }
          }
        );
      };
      const handleBill = (id, payment) => {
        router.post(
          route("factures.store", {
            booking_id: id,
            payment
          })
        );
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen ? true : open,
          onOpenChange: setopen,
          children: [
            /* @__PURE__ */ jsxs(
              DropdownMenuTrigger,
              {
                className: buttonVariants({
                  variant: "ghost",
                  size: "icon"
                }),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
                  /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              booking2.booking_status == "confirmer" ? /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DialogTrigger, { className: "cursor-pointer flex", children: [
                      /* @__PURE__ */ jsx(ReceiptText, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: t("bill") })
                    ] }),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsx(DialogTitle, { children: t("dialogTitle") }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: t("dialogDescreption") })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking2.booking_id,
                              "espece"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(HandCoins, { className: "mx-2 h-3.5 w-3.5" }),
                              t("opt1")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking2.booking_id,
                              "chèque"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(Ticket, { className: "mx-2 h-3.5 w-3.5" }),
                              t("opt2")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DrawerTrigger, { className: "cursor-pointer flex", children: [
                      /* @__PURE__ */ jsx(ReceiptText, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: t("bill") })
                    ] }),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsx(DrawerTitle, { children: t("dialogTitle") }),
                        /* @__PURE__ */ jsx(DrawerDescription, { children: t("dialogDescreption") })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking2.booking_id,
                              "espece"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(HandCoins, { className: "mx-2 h-3.5 w-3.5" }),
                              t("opt1")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => handleBill(
                              booking2.booking_id,
                              "check"
                            ),
                            className: "flex justify-center",
                            size: "sm",
                            children: [
                              /* @__PURE__ */ jsx(Ticket, { className: "mx-2 h-3.5 w-3.5" }),
                              t("opt2")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) }) : booking2.booking_status == "en attente" && booking_permission.update && route().current("bookings.index") ? /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "secondary",
                    onClick: () => handleBookingStatus("confirmer"),
                    children: t("approve")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "destructive",
                    onClick: () => handleBookingStatus("refusé"),
                    children: t("cancel")
                  }
                )
              ] }) : null,
              /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  onClick: () => router.get(
                    route("bookings.show", booking2.booking_id)
                  ),
                  className: "cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      t("show"),
                      " "
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      );
    }
  }
];
function EmptyPage({ text, icon: Icon }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-6 items-center py-36", children: [
    /* @__PURE__ */ jsx("div", { className: "font-bold text-xl", children: text }),
    /* @__PURE__ */ jsx(Icon, { size: 100, className: "text-primary" })
  ] });
}
function Bookings({ bookings: bookings2 }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const { t } = useTranslation("translation", { keyPrefix: "bookings" });
  useEffect(() => {
    var _a, _b, _c;
    if (flash.message) {
      flash.message.status == "success" ? toast2({
        description: (_a = flash.message) == null ? void 0 : _a.message
      }) : toast2({
        variant: "destructive",
        title: "Ereur !",
        description: (_b = flash.message) == null ? void 0 : _b.message,
        action: ((_c = flash.message) == null ? void 0 : _c.action) != null && /* @__PURE__ */ jsx(
          ToastAction,
          {
            altText: t("toastMessage"),
            onClick: () => router.get(route("factures.index")),
            children: t("toastMessage")
          }
        )
      });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: bookings2.data.length ? /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: historiqueColumns,
        data: bookings2.data,
        paginate: bookings2,
        selection: false
      }
    ) : /* @__PURE__ */ jsx(EmptyPage, { text: t("emptyPage"), icon: BookmarkCheck }) })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bookings
}, Symbol.toStringTag, { value: "Module" }));
dayjs.extend(isBetween);
function Calender({ rooms: rooms2 }) {
  const [open, setOpen] = useState(false);
  const [drawerData, setDrawerData] = useState();
  const [range, setRange] = useState({
    startDate: /* @__PURE__ */ new Date(),
    endDate: /* @__PURE__ */ new Date()
  });
  const handleTileclick = (data) => {
    setDrawerData(data);
    setOpen(true);
  };
  const handleItemClick = (data) => {
    console.log(data.label.title);
  };
  const transformedRooms = rooms2.map((room) => {
    var _a;
    return {
      id: room.room_number,
      label: {
        icon: (_a = room.assets[0]) == null ? void 0 : _a.url,
        title: `Chambres N° ${room.room_number}`,
        subtitle: room.type.type_designation
      },
      data: room.bookings.map((booking2) => ({
        id: booking2.booking_id,
        startDate: new Date(booking2.check_in),
        endDate: new Date(booking2.check_out),
        title: booking2.user_id,
        subtitle: booking2.guest_number
      }))
    };
  });
  const filterData = useMemo(
    () => transformedRooms.map((room) => ({
      ...room,
      data: room.data.filter(
        (booking2) => dayjs(booking2.startDate).isBetween(
          range.startDate,
          range.endDate
        ) || dayjs(booking2.endDate).isBetween(
          range.startDate,
          range.endDate
        ) || dayjs(booking2.startDate).isBefore(
          range.startDate,
          "day"
        ) && dayjs(booking2.endDate).isAfter(
          range.endDate,
          "day"
        )
      )
    })),
    [range.endDate, range.startDate]
  );
  const handelRangeChange = useCallback((range2) => {
    setRange(range2);
  }, []);
  const langs = [
    {
      id: "fr",
      lang: {
        feelingEmpty: "je me sens vide...",
        free: "Libre",
        loadNext: "Suivant",
        loadPrevious: "Précédent",
        over: "sur",
        taken: "Prise",
        topbar: {
          filters: "Filters",
          next: "Suivant",
          prev: "Précédent",
          today: "Aujourd'hui",
          view: "Voir"
        },
        search: "rechercher",
        week: "Semaine"
      },
      translateCode: "fr-FR"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs(Drawer$1.Root, { open, onOpenChange: setOpen, direction: "right", children: [
      /* @__PURE__ */ jsx(Drawer$1.Trigger, { children: "Open" }),
      /* @__PURE__ */ jsxs(Drawer$1.Portal, { children: [
        /* @__PURE__ */ jsx(Drawer$1.Overlay, { className: "fixed inset-0  z-[600] bg-black/40" }),
        /* @__PURE__ */ jsxs(Drawer$1.Content, { className: "bg-muted  z-[6000] flex flex-col rounded h-full w-2/3 mt-24 fixed bottom-0 right-0", children: [
          /* @__PURE__ */ jsx(Drawer$1.Handle, {}),
          /* @__PURE__ */ jsx("div", { className: "p-10", children: /* @__PURE__ */ jsx("pre", { children: JSON.stringify(drawerData, null, 2) }) })
        ] }),
        /* @__PURE__ */ jsx(Drawer$1.Overlay, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Scheduler,
      {
        data: filterData,
        isLoading: false,
        onRangeChange: handelRangeChange,
        onTileClick: handleTileclick,
        onItemClick: handleItemClick,
        config: {
          zoom: 1,
          filterButtonState: -1,
          maxRecordsPerPage: 10,
          includeTakenHoursOnWeekendsInDayView: true,
          showTooltip: false,
          lang: "fr",
          translations: langs
        }
      }
    )
  ] });
}
function Calendar({ rooms: rooms2 }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Calendrier" }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Calendrier" }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx("div", { className: "w-full relative h-[600px]", children: /* @__PURE__ */ jsx(Calender, { rooms: rooms2 }) }) })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Calendar
}, Symbol.toStringTag, { value: "Module" }));
function Historique({ bookings: bookings2 }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("bookings.historicalTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("bookings.historicalTitle") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: bookings2.data.length ? /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: historiqueColumns,
        data: bookings2.data,
        paginate: bookings2,
        selection: false
      }
    ) : /* @__PURE__ */ jsx(EmptyPage, { text: t("bookings.emptyPage"), icon: Archive }) })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Historique
}, Symbol.toStringTag, { value: "Module" }));
function DataCart({
  data,
  last_data,
  header_text,
  footer_text = "",
  side
}) {
  const calculate = (last, now) => {
    if (last > 0) {
      return 100 * ((now - last) / last);
    } else {
      return 0;
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: "w-1/2", children: [
    /* @__PURE__ */ jsxs(
      CardHeader,
      {
        className: cn(
          "p-2 pb-0 text-sm font-medium",
          side && "flex-row justify-between items-center"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { children: header_text }),
          side == "left" && /* @__PURE__ */ jsx(ArrowLeft, { className: "text-green-600 dark:text-green-400 " }),
          side == "right" && /* @__PURE__ */ jsx(ArrowRight, { className: "text-red-600 dark:text-red-600" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-2 font-bold text-4xl", children: [
      "+ ",
      data
    ] }),
    footer_text && /* @__PURE__ */ jsxs(
      CardFooter,
      {
        className: cn(
          "p-2 pt-0 text-sm font-medium",
          last_data > data ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
        ),
        children: [
          calculate(last_data, data) > 0 && "+",
          calculate(last_data, data),
          "% ",
          footer_text
        ]
      }
    )
  ] });
}
const Chart = React__default.lazy(() => import("./assets/Chart-DwaOjb3l.js"));
function Dashboard({
  check_ins,
  check_outs,
  day_bookings,
  last_day_bookings,
  month_bookings,
  last_month_bookings,
  bookingCounts
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("dashboard.title") }),
    /* @__PURE__ */ jsxs(PlaceholderContent, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 flex-full lg:w-1/2", children: [
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: t("dashboard.dataChart1"),
              left: true,
              data: check_ins,
              side: "left"
            }
          ),
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: t("dashboard.dataChart2"),
              right: true,
              data: check_outs,
              side: "right"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 flex-full lg:w-1/2", children: [
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: t("dashboard.dataChart3"),
              data: day_bookings,
              last_data: last_day_bookings,
              footer_text: t("dashboard.dataChartFooter1")
            }
          ),
          /* @__PURE__ */ jsx(
            DataCart,
            {
              header_text: t("dashboard.dataChart4"),
              data: month_bookings,
              last_data: last_month_bookings,
              footer_text: t("dashboard.dataChartFooter2")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        React__default.Suspense,
        {
          fallback: /* @__PURE__ */ jsx(Skeleton, { className: "w-full md:w-1/2 mt-4 h-1/2" }),
          children: /* @__PURE__ */ jsx(Chart, { bookingCounts })
        }
      )
    ] })
  ] });
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command$1.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
function EmployeForm({ roles: roles2, user }) {
  const { t } = useTranslation("translation", { keyPrefix: "users.form" });
  const [open, setOpen] = useState(false);
  const { data, setData: setData2, post, put, errors, processing } = useForm({
    first_name: user ? user.first_name : "",
    last_name: user ? user.last_name : "",
    email: user ? user.email : "",
    phone: user ? user.phone : "",
    role: user ? user.role.role_name : ""
  });
  const submit = (e) => {
    e.preventDefault();
    user ? put(route("users.update", user.id)) : post(route("users.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: user ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: user ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "first_name",
              value: t("firstName")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "first_name",
              value: data.first_name,
              onChange: (e) => setData2("first_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.first_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "last_name",
              value: t("lastName")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "last_name",
              value: data.last_name,
              onChange: (e) => setData2("last_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.last_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("email") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("emailDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("email") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "email",
              value: data.email,
              onChange: (e) => setData2("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.email,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "phone", value: t("phone") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("phoneDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "phone", value: t("phone") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "phone",
              value: data.phone,
              onChange: (e) => setData2("phone", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.phone,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "role", value: t("role") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("roleDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "role",
              value: t("role"),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                role: "combobox",
                "aria-expanded": open,
                className: "w-full justify-between",
                children: [
                  data.role ? data.role : t("rolePlaceholder"),
                  /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
              /* @__PURE__ */ jsx(
                CommandInput,
                {
                  placeholder: t("rolePlaceholder2")
                }
              ),
              /* @__PURE__ */ jsxs(CommandList, { children: [
                /* @__PURE__ */ jsx(CommandEmpty, { children: t("emptyRole") }),
                /* @__PURE__ */ jsx(CommandGroup, { children: roles2.map((role) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: role.role_name,
                    onSelect: () => {
                      setData2(
                        "role",
                        role.role_name
                      );
                      setOpen(false);
                    },
                    children: [
                      role.role_name,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            data.role === role.role_name ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  role.role_id
                )) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.role,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          disabled: processing,
          children: user ? t("editBtn") : t("createBtn")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EmployeForm
}, Symbol.toStringTag, { value: "Module" }));
const userColumns = [
  {
    accessorKey: "utilisateurs",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("div", { children: [
        user.first_name,
        " ",
        user.last_name
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "utilisateurs" })
  },
  {
    accessorKey: "email",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        user.email,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "email" })
  },
  {
    accessorKey: "phone",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        user.phone,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "phone" })
  },
  {
    accessorKey: "role",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs(Badge, { children: [
        user.role.role_name,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "role" })
  },
  {
    accessorKey: "createdAtDate",
    cell: ({ row }) => {
      const user = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        user.created_at.split("T")[0]
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "createdAtDate" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      const [processing, setProcessing] = React__default.useState(false);
      const employ_permission = usePage().props.auth.permissions.employ;
      const { t } = useTranslation("translation", { keyPrefix: "users" });
      const handleDelete = () => {
        router.delete(route("users.destroy", user.id), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            setopen(false);
            setIsOpen(false);
          },
          onStart: () => {
            setProcessing(true);
          },
          onFinish: () => {
            setProcessing(false);
          }
        });
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen || open,
          onOpenChange: () => setopen(!open),
          children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
              /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              employ_permission.update && /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  className: "cursor-pointer flex",
                  disabled: processing,
                  onClick: () => router.get(
                    route("users.edit", user.id),
                    {},
                    {
                      onStart: () => {
                        setProcessing(true);
                      },
                      onFinish: () => {
                        setProcessing(false);
                      }
                    }
                  ),
                  children: [
                    /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsx("span", { children: t("edit") })
                  ]
                }
              ),
              employ_permission.delete && /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(
                      DialogTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          t("delete")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsxs(DialogTitle, { children: [
                          t("dialogHeader"),
                          " "
                        ] }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: t("dialogDescreption") })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => setIsOpen(false),
                            children: t("cancel")
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            disabled: processing,
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              t("delete")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(
                      DrawerTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          t("delete")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsxs(DrawerTitle, { children: [
                          t("dialogHeader"),
                          " "
                        ] }),
                        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
                          t("dialogDescreption"),
                          " "
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            disabled: processing,
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              t("delete")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) })
                      ] })
                    ] })
                  ]
                }
              ) })
            ] })
          ]
        }
      );
    }
  }
];
function Employees({ users: users2 }) {
  const { t } = useTranslation("translation", { keyPrefix: "users" });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const [processing, setProcessing] = React__default.useState(false);
  const employ_permission = usePage().props.auth.permissions.employ;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: employ_permission.create && /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "secondary",
        disabled: processing,
        onClick: () => router.get(
          route("users.create"),
          {},
          {
            onStart: () => {
              setProcessing(true);
            },
            onFinish: () => {
              setProcessing(false);
            }
          }
        ),
        children: [
          t("createBtn"),
          " "
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: userColumns,
        data: users2.data,
        paginate: users2,
        selection: false
      }
    ) })
  ] });
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Employees
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$5 = ["JPG", "PNG", "GIF"];
function MyFileUploader() {
  const { t } = useTranslation("translation", {
    keyPrefix: "components"
  });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-card mt-2 p-4 rounded flex justify-between items-center border-dashed border-2 border-secondary", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
      /* @__PURE__ */ jsx(ImagePlus, {}),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: t("fileUploader") })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
      fileTypes$5.map((type) => type + ","),
      " "
    ] })
  ] }) });
}
function ImagesViewer({ images, errors, deleteImage }) {
  return /* @__PURE__ */ jsx("div", { className: "pb-4", children: images.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", children: images.map((image, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image.url,
        alt: `Selected ${index}`,
        className: "rounded-md object-cover aspect-video"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => deleteImage(index),
        className: buttonVariants({
          variant: "destructive",
          className: "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
        }),
        children: /* @__PURE__ */ jsx(Trash, {})
      }
    ),
    errors && /* @__PURE__ */ jsx(
      InputError,
      {
        message: errors == null ? void 0 : errors[`assets.${index}`],
        className: "mt-2"
      }
    )
  ] }, index)) }) });
}
function DbImageViewer({ assets, remouveAsset }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", children: assets.map((image, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image.url,
        alt: `Selected ${index}`,
        className: "rounded-md object-cover aspect-video"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => remouveAsset(image.id),
        className: buttonVariants({
          variant: "destructive",
          className: "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer"
        }),
        children: /* @__PURE__ */ jsx(Trash, {})
      }
    )
  ] }, index)) });
}
const fileTypes$4 = ["JPG", "PNG", "GIF"];
function EventForm({ event }) {
  const { t } = useTranslation("translation", { keyPrefix: "events.form" });
  const [dbImages, setDbImages] = useState(event == null ? void 0 : event.assets);
  const [importedFiles, setImportedFiles] = useState([]);
  const [dateRange, setDateRange] = useState({
    from: event ? new Date(event.event_start_date) : "",
    to: event ? new Date(event.event_end_date) : ""
  });
  const { data, setData: setData2, post, errors, clearErrors, processing } = useForm({
    event_name: event ? event.event_name : "",
    event_descreption: event ? event.event_descreption : "",
    event_start_date: event ? event.event_start_date : "",
    event_end_date: event ? event.event_end_date : "",
    event_price: event ? event.event_price : "",
    assets: [],
    remouved_assets: [],
    required_assets: false
  });
  const remouveAsset = (index) => {
    setData2((prevData) => ({
      ...prevData,
      remouved_assets: [...prevData.remouved_assets, index]
    }));
    setDbImages((prevDbImages) => {
      const updatedDbImages = prevDbImages.filter(
        (image) => image.id !== index
      );
      setData2((prevData) => ({
        ...prevData,
        required_assets: updatedDbImages.length === 0
      }));
      return updatedDbImages;
    });
  };
  const submit = (e) => {
    e.preventDefault();
    event ? post(route("events.update", event.event_id)) : post(route("events.store"));
  };
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("event_start_date", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("event_end_date", formattedDate);
    }
    setDateRange(range);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: event ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: event ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date d'évènement",
              value: t("eventDate")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("eventDateDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date d'évènement",
              value: t("eventDate")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_start_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_end_date,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_name",
              value: t("Name")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("nameDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_name",
              value: t("Name")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              placeholder: t("namePlaceholder"),
              id: "event_name",
              value: data.event_name,
              onChange: (e) => setData2("event_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_price",
              value: t("price")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("priceDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_price",
              value: t("price")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "event_price",
              value: data.event_price,
              onChange: (e) => setData2("event_price", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_price,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("descreptionDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "event_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.event_descreption,
              onContentChange: ({ html }) => {
                setData2("event_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.event_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: t("assetsDescreption") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$4,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        " ",
        event && /* @__PURE__ */ jsx(
          DbImageViewer,
          {
            assets: dbImages,
            remouveAsset
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          disabled: processing,
          children: event ? t("editBtn") : t("createBtn")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EventForm
}, Symbol.toStringTag, { value: "Module" }));
function DeleteeDialog({ id, url, message }) {
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { width } = useWindowDimensions();
  const { t } = useTranslation("translation", {
    keyPrefix: "features.form"
  });
  const handleDelete = (id2) => {
    router.delete(route(url, id2, message), {
      method: "delete",
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setOpen(false);
      },
      onStart: () => {
        setDeleting(true);
      },
      onFinish: () => {
        setDeleting(false);
      }
    });
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DialogTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            t("delete")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { children: [
            t("deleteHeader"),
            " "
          ] }),
          /* @__PURE__ */ jsx(DialogDescription, { children: message })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              onClick: () => setOpen(false),
              children: t("cancel")
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "destructive",
              onClick: () => handleDelete(id),
              className: "flex justify-center",
              disabled: deleting,
              children: [
                /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                t("delete")
              ]
            }
          )
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxs(
      DrawerTrigger,
      {
        className: buttonVariants({ variant: "destructive" }),
        children: [
          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
          t("delete")
        ]
      }
    ),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
        /* @__PURE__ */ jsxs(DrawerTitle, { children: [
          t("deleteHeader"),
          " "
        ] }),
        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
          " ",
          t("deleteCategorieDescreption")
        ] })
      ] }),
      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "destructive",
            onClick: () => {
              handleDelete(id);
            },
            className: "flex justify-center",
            disabled: deleting,
            children: [
              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
              t("delete")
            ]
          }
        ),
        /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) })
      ] })
    ] })
  ] });
}
function EventCardFooter$1({ event }) {
  const event_permission = usePage().props.event_permission;
  const { t } = useTranslation("translation", { keyPrefix: "events.card" });
  const [processing, setProcessing] = React__default.useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-between w-full", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      t("createdBy"),
      " :",
      " ",
      /* @__PURE__ */ jsxs("span", { children: [
        event.user.first_name,
        " ",
        event.user.last_name
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      event_permission.update && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          disabled: processing,
          onClick: () => router.get(
            route("events.edit", event.event_id),
            {},
            {
              onStart: () => {
                setProcessing(true);
              },
              onFinish: () => {
                setProcessing(false);
              }
            }
          ),
          children: t("editBtn")
        }
      ),
      event_permission.delete && /* @__PURE__ */ jsx(
        DeleteeDialog,
        {
          id: event.event_id,
          url: "events.destroy",
          message: t("eventDeleteDescreption")
        }
      )
    ] })
  ] });
}
function EventCard({ event }) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "events.card" });
  return /* @__PURE__ */ jsxs(Card, { className: "transition-transform ease-in-out duration-700 relative my-6 ", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { className: "h-full ", children: event.assets.map((asset, index) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: `Selected ${index}`,
              className: "rounded-md object-cover aspect-video w-full"
            }
          )
        },
        index
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary left-0 text-secondary-foreground" }),
      /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary right-0 text-secondary-foreground" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold text-xl flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: event.event_name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-muted p-2 rounded", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            t("price"),
            " "
          ] }),
          ":",
          /* @__PURE__ */ jsx("span", { className: "text-destructive text-2xl font-bold", children: event.event_price }),
          " ",
          /* @__PURE__ */ jsxs("span", { children: [
            t("da"),
            " "
          ] })
        ] })
      ] }),
      isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(CardContent, { children: [
          event.event_start_date == event.event_end_date ? /* @__PURE__ */ jsxs("div", { children: [
            t("eventDate"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: event.event_start_date })
          ] }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("eventStartDate"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: event.event_start_date })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              t("eventEndDate"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: event.event_end_date })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
              t("descreption"),
              " :",
              " "
            ] }),
            /* @__PURE__ */ jsx(
              RichEditor,
              {
                autofocus: false,
                editable: false,
                content: event.event_descreption
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(EventCardFooter$1, { event }) })
      ] })
    ] }),
    width >= 767 && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 right-1/2 translate-x-1/2 z-20", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: buttonVariants({
          variant: "outline",
          size: "icon"
        }),
        onClick: () => setIsOpen(!isOpen),
        children: /* @__PURE__ */ jsx(
          ChevronUp,
          {
            className: cn(
              "h-4 w-4 transition-transform ease-in-out duration-700 ",
              isOpen === false ? "rotate-180" : "rotate-0"
            )
          }
        )
      }
    ) })
  ] });
}
function Events$1({ events: events2, event_permission }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const { t } = useTranslation("translation", { keyPrefix: "events" });
  const [processing, setProcessing] = React__default.useState(false);
  React__default.useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: event_permission.create && /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        disabled: processing,
        onClick: () => router.get(
          route("events.create"),
          {},
          {
            onStart: () => {
              setProcessing(true);
            },
            onFinish: () => {
              setProcessing(false);
            }
          }
        ),
        children: t("createLink")
      }
    ) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: events2.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold p-4", children: t("pageHeading") }),
      events2.map((event) => /* @__PURE__ */ jsx(EventCard, { event }, event.event_id))
    ] }) : /* @__PURE__ */ jsx(EmptyPage, { text: t("emptyEvents"), icon: Megaphone }) })
  ] });
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Events$1
}, Symbol.toStringTag, { value: "Module" }));
function CreateFacture() {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Facture Création" }),
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Facture Création" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Créez et gérez facilement vos factures pour une gestion simplifiée des réservations à l'hôtel Sidi El Noui."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PageHeading, { title: "Facture Création" }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: "Facture Création " })
  ] });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateFacture
}, Symbol.toStringTag, { value: "Module" }));
function CreateGuests({ facture_id }) {
  const { t } = useTranslation("translation", { keyPrefix: "guests" });
  const { data, setData: setData2, post, errors, processing } = useForm({
    facture_id,
    guests_list: [{ guest_first_name: "", guest_last_name: "" }]
  });
  const addGuest = () => {
    setData2("guests_list", [
      ...data.guests_list,
      { guest_first_name: "", guest_last_name: "" }
    ]);
  };
  const minesGuest = (index) => {
    if (data.guests_list.length == 1) {
      return;
    }
    const updatedGuests = data.guests_list.filter((_, i) => i !== index);
    setData2("guests_list", updatedGuests);
  };
  const handleGuestChange = (index, field, value) => {
    const updatedGuests = data.guests_list.map(
      (guest, i) => i === index ? { ...guest, [field]: value } : guest
    );
    setData2("guests_list", updatedGuests);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("guests.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", onClick: addGuest, children: [
      /* @__PURE__ */ jsx(CirclePlus, { className: "mr-2 rtl:ml-2" }),
      t("addBtn")
    ] }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      data.guests_list.map((guest, index) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: `guest_first_name_${index}`,
                value: t("firstName")
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "mt-2 w-full bg-card",
                id: `guest_first_name_${index}`,
                value: guest.guest_first_name,
                onChange: (e) => handleGuestChange(
                  index,
                  "guest_first_name",
                  e.target.value
                )
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors[`guests_list.${index}.guest_first_name`],
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: `guest_last_name_${index}`,
                value: t("lastName")
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "mt-2 w-full bg-card",
                id: `guest_last_name_${index}`,
                value: guest.guest_last_name,
                onChange: (e) => handleGuestChange(
                  index,
                  "guest_last_name",
                  e.target.value
                )
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors[`guests_list.${index}.guest_last_name`],
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center ", children: /* @__PURE__ */ jsx(
            CircleMinus,
            {
              className: "cursor-pointer hover:text-red-600",
              onClick: () => minesGuest(index)
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "my-4" })
      ] }, index)),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          disabled: processing,
          children: t("saveBtn")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateGuests
}, Symbol.toStringTag, { value: "Module" }));
function Facture({ facture, data, mail, total_ttc_words }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const [processing, setProcessing] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "factures.table"
  });
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("factureTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("factureTitle") }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "secondary",
          size: "sm",
          disabled: processing,
          onClick: () => router.get(
            route("factures.send", { id: facture.facture_id }),
            {},
            {
              onStart: () => {
                setProcessing(true);
              },
              onFinish: () => {
                setProcessing(false);
              }
            }
          ),
          children: [
            /* @__PURE__ */ jsx(Send, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            /* @__PURE__ */ jsx("span", { children: t("email") })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: route("factures.print", {
            id: facture.facture_id
          }),
          target: "_blank",
          children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", disabled: processing, children: [
            /* @__PURE__ */ jsx(Printer, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            /* @__PURE__ */ jsx("span", { children: t("print") })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: route("factures.download", {
            id: facture.facture_id
          }),
          children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", disabled: processing, children: [
            /* @__PURE__ */ jsx(FileDown, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
            /* @__PURE__ */ jsx("span", { children: t("download") })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("div", { className: "p-10 font-sans", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex justify-between mb-4", children: [
        /* @__PURE__ */ jsx("div", { children: "Hôtel Sidi El Noui" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AppLogo, { className: "h-10 w-10" }) }),
        /* @__PURE__ */ jsx("div", { children: "فندق سيدي النوي" })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "mb-4" }),
      /* @__PURE__ */ jsxs("main", { children: [
        /* @__PURE__ */ jsxs("section", { className: "text-center font-semibold mb-5", children: [
          /* @__PURE__ */ jsx("div", { children: "Siege Social : 18 rue Alioua Fodil CHERAGA" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { children: "Tél : 023 35 82 26 / 30 " }),
            /* @__PURE__ */ jsx("span", { children: "Fax : 023 35 82 32 / 34" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "Mail:",
              mail
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-semibold mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2", children: "Facture" }),
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2 text-right", children: facture.facture_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-semibold mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2", children: "Facturé le" }),
            /* @__PURE__ */ jsx("span", { className: "inline-block w-1/2 text-right", children: facture.created_at.split("T")[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-left my-4", children: [
          /* @__PURE__ */ jsx("div", { children: "Doit" }),
          /* @__PURE__ */ jsxs("div", { className: "border-2 border-black p-2 mt-2 h-36 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.first_name }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.last_name }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.adresse && " / Adresse : " + facture.booking.user.adresse + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.nif && "Numéro d'Identification Fiscale : " + facture.booking.user.nif + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.nis && "Numéro d'Identification Statistique : " + facture.booking.user.nis + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.nrc && "Numéro  de registre de commerce : " + facture.booking.user.nrc + " / " }),
            /* @__PURE__ */ jsx("span", { children: facture.booking.user.n_article && "Numéro d'article : " + facture.booking.user.n_article })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse border border-black mb-6", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-muted text-muted-foreground", children: [
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Description" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Date" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Nombre de jours" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Quantité" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Prix unitaire" }),
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2", children: "Montant HT" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { children: [
              data.rooms.map((room, index) => /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.room }),
                /* @__PURE__ */ jsxs("td", { className: "border border-black p-2", children: [
                  facture.booking.check_in,
                  " AU",
                  " ",
                  facture.booking.check_out
                ] }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: (new Date(
                  facture.booking.check_out
                ) - new Date(
                  facture.booking.check_in
                )) / (1e3 * 60 * 60 * 24) }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.quantity }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.unitare_price }),
                /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: room.unitare_price * room.quantity })
              ] }, index)),
              data.consomations.map(
                (consomation, index) => /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.consumption_name }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "/" }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "/" }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.quantity }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.unitare_price }),
                  /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: consomation.unitare_price * consomation.quantity })
                ] }, index)
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("table", { className: "w-2/5 ml-auto border-collapse border border-black", children: /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { className: "border border-black p-2 bg-muted text-muted-foreground", children: "Total HT" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.total_ht })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("th", { className: "border border-black p-2 bg-muted text-muted-foreground", children: [
                "Total TVA ",
                facture.tva,
                "%"
              ] }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.total_tva })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Sous Total" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.sous_total })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Taxe de séjour" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.taxe_de_sejour })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Droit de timbre" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.droit_de_timbre })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: "Total TTC" }),
              /* @__PURE__ */ jsx("td", { className: "border border-black p-2", children: data.total_ttc })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6", children: "LA PRESENTE FACTURE EST ARRETEE A LA SOMME DE :" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold", children: total_ttc_words })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "mt-6" }),
      /* @__PURE__ */ jsxs("footer", { className: "mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "footer-1 text-center mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "Sarl au capital de: 3 000 000 DA" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "RC : 16/00-0011557 B 00" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "NIF : 000016001155791" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "A.I : 16500 35 10 11" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "footer-2 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "NIS : 0000165008341 61" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "CPA Agence de AIN BENIAN" }),
          /* @__PURE__ */ jsx("div", { className: "inline-block mx-2", children: "RIB : 004 00 153 400 082361141" })
        ] })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Facture
}, Symbol.toStringTag, { value: "Module" }));
const factureColumns = [
  {
    accessorKey: "billNumber",
    cell: ({ row }) => {
      const facture = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        facture.facture_id,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "billNumber" })
  },
  {
    accessorKey: "client",
    cell: ({ row }) => {
      const facture = row.original;
      return /* @__PURE__ */ jsxs("div", { children: [
        facture.booking.user.first_name,
        " ",
        facture.booking.user.last_name
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "client" })
  },
  {
    accessorKey: "email",
    cell: ({ row }) => {
      const facture = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        facture.booking.user.email,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "email" })
  },
  {
    accessorKey: "date",
    cell: ({ row }) => {
      function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      }
      const facture = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        formatDate(facture.created_at),
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "date" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const facture = row.original;
      const { t } = useTranslation("translation", { keyPrefix: "factures.table" });
      return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
          /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
          facture.booking.user.role.role_name == "sositée" && /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("guests.show", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(ClipboardList, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                t("guestsList")
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("factures.show", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                t("show")
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("factures.send", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Send, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                /* @__PURE__ */ jsx("span", { children: t("email") })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: route("factures.print", {
                id: facture.facture_id
              }),
              target: "_blank",
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Printer, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                /* @__PURE__ */ jsx("span", { children: t("print") })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: route("factures.download", {
                id: facture.facture_id
              }),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(FileDown, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                /* @__PURE__ */ jsx("span", { children: t("download") })
              ]
            }
          ) })
        ] })
      ] });
    }
  }
];
function FactureSettings({ bill_settings }) {
  const [open, setOpen] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "factures.settings"
  });
  const { data, setData: setData2, errors, post, processing } = useForm({
    tva: bill_settings ? bill_settings == null ? void 0 : bill_settings.tva : "",
    timbre: bill_settings ? bill_settings == null ? void 0 : bill_settings.timbre : "",
    tourist_tax: bill_settings ? bill_settings == null ? void 0 : bill_settings.tourist_tax : ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("factures.bill.settings"), {
      onSuccess: () => setOpen(false)
    });
  };
  return /* @__PURE__ */ jsxs(Sheet, { open: open || !bill_settings, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { children: /* @__PURE__ */ jsx(Settings2, {}) }),
    /* @__PURE__ */ jsx(SheetContent, { children: /* @__PURE__ */ jsxs(SheetHeader, { children: [
      /* @__PURE__ */ jsx(SheetTitle, { children: t("title") }),
      /* @__PURE__ */ jsx(SheetDescription, { children: t("descreption") }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow my-4", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "tva", value: "TVA" }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("tva") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "tva",
              value: data.tva,
              onChange: (e) => setData2("tva", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.tva, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow my-4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "tourist_tax",
              value: t("taxes")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("taxesDescreption") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "tourist_tax",
              value: data.tourist_tax,
              onChange: (e) => setData2("tourist_tax", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.tourist_tax,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsxs("div", { className: "w-full bg-muted p-4 shadow my-4", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "timbre", value: t("timbre") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("timbreDescreption") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "timbre",
              value: data.timbre,
              onChange: (e) => setData2("timbre", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.timbre,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "w-full",
            disabled: processing,
            children: t("save")
          }
        )
      ] })
    ] }) })
  ] });
}
function Factures({ factures: factures2, bill_settings }) {
  const [processing, setProcessing] = React__default.useState(false);
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const facture_permissions = usePage().props.auth.permissions.facture;
  const { t } = useTranslation("translation", { keyPrefix: "factures" });
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    facture_permissions.create && /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          disabled: processing,
          onClick: () => router.get(
            route("bookings.index"),
            {},
            {
              onStart: () => {
                setProcessing(true);
              },
              onFinish: () => {
                setProcessing(false);
              }
            }
          ),
          children: t("topBtn")
        }
      ),
      /* @__PURE__ */ jsx(FactureSettings, { bill_settings })
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: factures2.data.length ? /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: factureColumns,
        data: factures2.data,
        paginate: factures2,
        selection: false
      }
    ) : /* @__PURE__ */ jsx(EmptyPage, { text: t("emptyBill"), icon: ReceiptText }) })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Factures
}, Symbol.toStringTag, { value: "Module" }));
function GuestList({ guests: guests2 }) {
  const { t } = useTranslation("translation", { keyPrefix: "guests" });
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "List d'invités" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        size: "sm",
        onClick: () => router.get(route("guests.create", 5)),
        children: t("addGuestsBtn")
      }
    ) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("table", { className: "border w-full", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsxs("th", { className: "border px-4 ", children: [
          t("lastName"),
          " "
        ] }),
        /* @__PURE__ */ jsxs("th", { className: "border px-4 ", children: [
          t("firstName"),
          " "
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: guests2.map((guest) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-muted", children: [
        /* @__PURE__ */ jsxs("td", { className: "border px-4 ", children: [
          guest.guest_first_name,
          " "
        ] }),
        /* @__PURE__ */ jsx("td", { className: "border px-4 ", children: guest.guest_last_name })
      ] }, guest.guest_id)) })
    ] }) })
  ] });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GuestList
}, Symbol.toStringTag, { value: "Module" }));
const ResizablePanelGroup = ({ className, ...props }) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelGroup,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
);
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({ withHandle, className, ...props }) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsx(DragHandleDots2Icon, { className: "h-2.5 w-2.5" }) })
  }
);
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary dark:focus:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
function messages$2({ messages: messages2, filter }) {
  var _a, _b, _c, _d, _e, _f, _g;
  const [selectedMessage, setSelectedMessage] = useState(0);
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const hasUnreadMessages = usePage().props.hasUnreadMessages;
  const permission = usePage().props.auth.permissions.message;
  const { t } = useTranslation("translation", { keyPrefix: "messages" });
  const [deleteProgress, setDeleteProgress] = useState(false);
  const { data, setData: setData2, post, errors, processing } = useForm({
    message: "",
    client_email: (_a = messages2[selectedMessage]) == null ? void 0 : _a.client_email
  });
  useEffect(() => {
    var _a2;
    if (flash.message) {
      toast2({ description: (_a2 = flash.message) == null ? void 0 : _a2.message });
    }
  }, [flash.message, toast2]);
  const submit = (e) => {
    e.preventDefault();
    post(route("messages.reply"));
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
  }
  function timeSince(date) {
    const now = /* @__PURE__ */ new Date();
    const past = new Date(date);
    const secondsAgo = Math.floor((now - past) / 1e3);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo > 0) {
      return `${daysAgo} jrs`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} h`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} min`;
    } else {
      return `${secondsAgo} s`;
    }
  }
  const readMessage = (id) => {
    router.put(
      route("messages.update", id),
      {},
      {
        preserveState: true,
        preserveScroll: true,
        nStart: () => {
          setDeleteProgress(true);
        },
        onFinish: () => {
          setDeleteProgress(false);
        }
      }
    );
  };
  const readAll = () => {
    router.get(route("messages.readAll"), {
      nStart: () => {
        setDeleteProgress(true);
      },
      onFinish: () => {
        setDeleteProgress(false);
      }
    });
  };
  const getUnRead = () => {
    router.get(
      route("messages.index"),
      { filter: "unread" },
      {
        preserveState: true,
        preserveScroll: true,
        nStart: () => {
          setDeleteProgress(true);
        },
        onFinish: () => {
          setDeleteProgress(false);
        }
      }
    );
  };
  const getAll = () => {
    router.get(
      route("messages.index"),
      { filter: "all" },
      {
        preserveState: true,
        preserveScroll: true,
        nStart: () => {
          setDeleteProgress(true);
        },
        onFinish: () => {
          setDeleteProgress(false);
        }
      }
    );
  };
  const deleteMessage = (id) => {
    router.delete(route("messages.destroy", id), {
      onStart: () => {
        setDeleteProgress(true);
      },
      onFinish: () => {
        setDeleteProgress(false);
      }
    });
  };
  const deleteAll = () => {
    router.delete(route("messages.destroyAll"), {
      onStart: () => {
        setDeleteProgress(true);
      },
      onFinish: () => {
        setDeleteProgress(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end mt-2 gap-4", children: [
      permission.update && /* @__PURE__ */ jsx(
        Button,
        {
          disabled: messages2.length < 1 || !hasUnreadMessages || deleteProgress,
          onClick: () => {
            readAll();
          },
          variant: "ghost",
          className: "font-bold ",
          children: t("readAll")
        }
      ),
      permission.delete && /* @__PURE__ */ jsx(
        Button,
        {
          disabled: messages2.length < 1 || deleteProgress,
          onClick: () => {
            deleteAll();
          },
          variant: "ghost",
          className: "font-bold",
          children: t("deleteAll")
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs(ResizablePanelGroup, { direction: "horizontal", children: [
      /* @__PURE__ */ jsxs(ResizablePanel, { className: "w-1/2", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              getAll();
            },
            variant: "ghost",
            className: cn(
              "font-bold mx-2",
              filter != "unread" && "bg-accent text-accent-foreground"
            ),
            disabled: deleteProgress,
            children: t("all")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => {
              getUnRead();
            },
            variant: "ghost",
            className: cn(
              "font-bold",
              filter == "unread" && "bg-accent text-accent-foreground"
            ),
            disabled: deleteProgress,
            children: t("unread")
          }
        ),
        messages2.length > 0 ? /* @__PURE__ */ jsx(ScrollArea, { className: "h-96 mt-2", children: /* @__PURE__ */ jsx("div", { children: messages2.map((message, idx) => /* @__PURE__ */ jsxs(Card, { className: "mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: " hover:cursor-pointer hover:bg-accent", children: [
            /* @__PURE__ */ jsxs(
              CardHeader,
              {
                className: "p-3 flex justify-between itmes-center flex-row ",
                onClick: () => {
                  if (message.read_at == null) {
                    readMessage(
                      message.message_id
                    );
                  }
                  setSelectedMessage(idx);
                },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
                    message.subject,
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: message.user ? message.user.first_name : t("user") })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground opacity-60", children: timeSince(
                      message.created_at
                    ) }),
                    message.read_at == null && /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full" }),
                    " "
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              CardContent,
              {
                className: "p-3",
                onClick: () => {
                  readMessage(
                    message.message_id
                  );
                  setSelectedMessage(idx);
                },
                children: /* @__PURE__ */ jsxs(CardDescription, { children: [
                  message.message,
                  " "
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "p-3 flex justify-end gap-3", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "link",
                size: "sm",
                className: "text-secondary",
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "mailto:" + message.client_email,
                    children: t("replyToMail")
                  }
                )
              }
            ),
            permission.delete && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "destructive",
                size: "sm",
                onClick: () => deleteMessage(
                  message.message_id
                ),
                disabled: deleteProgress,
                children: t("delete")
              }
            )
          ] })
        ] }, idx)) }) }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center flex-col h-96 mt-2 ", children: [
          /* @__PURE__ */ jsx(MessageSquareX, { size: 70 }),
          /* @__PURE__ */ jsxs("div", { children: [
            " ",
            t("noMessage"),
            " "
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ResizableHandle, { withHandle: true, className: "mx-4" }),
      /* @__PURE__ */ jsxs(ResizablePanel, { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "my-2 flex justify-between itmes-center flex-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
            ((_b = messages2[selectedMessage]) == null ? void 0 : _b.user) ? messages2[selectedMessage].user.first_name : t("user"),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: ((_c = messages2[selectedMessage]) == null ? void 0 : _c.subject) ? messages2[selectedMessage].subject : t("subject") }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
              t("replyTo"),
              " ",
              ((_d = messages2[selectedMessage]) == null ? void 0 : _d.client_email) ? (_e = messages2[selectedMessage]) == null ? void 0 : _e.client_email : "client@gmail.com"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: ((_f = messages2[selectedMessage]) == null ? void 0 : _f.created_at) ? formatDate(
            messages2[selectedMessage].created_at
          ) : "00-00-0000, 00:00:00 " })
        ] }),
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx(ScrollArea, { className: "h-1/2", children: /* @__PURE__ */ jsx("div", { className: "py-2", children: ((_g = messages2[selectedMessage]) == null ? void 0 : _g.message) ? messages2[selectedMessage].message : t("message") }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 w-full", children: [
          /* @__PURE__ */ jsx(Separator, { className: "my-2 " }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
            /* @__PURE__ */ jsx(
              Textarea,
              {
                placeholder: t("placeholder"),
                value: data.message,
                onChange: (e) => setData2("message", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.message,
                className: "mt-2"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex justify-end  my-3", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                disabled: messages2.length < 1 || processing,
                children: t("submit")
              }
            ) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: messages$2
}, Symbol.toStringTag, { value: "Module" }));
function Notifications({ notifications: notifications2 }) {
  const { t } = useTranslation("translation", { keyPrefix: "notifications" });
  function timeSince(date) {
    const now = /* @__PURE__ */ new Date();
    const past = new Date(date);
    const secondsAgo = Math.floor((now - past) / 1e3);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo > 0) {
      return `${daysAgo} jrs`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} h`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} min`;
    } else {
      return `${secondsAgo} s`;
    }
  }
  const deleteAll = () => {
    router.get(route("notifications.deleteAll"));
  };
  const readAll = () => {
    router.get(route("notifications.readAll"));
  };
  const ViewNotification = (notif) => {
    router.get(
      route("bookings.show", notif.data.booking_id),
      {},
      {
        onSuccess: () => {
          router.post(route("notifications.read"), {
            id: notif.id
          });
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end mt-2 -mb-4 gap-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => {
            readAll();
          },
          variant: "ghost",
          className: "font-bold",
          children: t("readAll")
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => {
            deleteAll();
          },
          variant: "ghost",
          className: "font-bold",
          children: t("deleteAll")
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: notifications2.map((notification, index) => /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "ghost",
        className: cn(
          "relative w-full flex justify-between mb-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
          notification.read_at == null ? "border border-input bg-background " : ""
        ),
        onClick: () => ViewNotification(notification),
        children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
              notification.data.first_name,
              " ",
              notification.data.last_name
            ] }),
            " ",
            t("text1"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: notification.data.check_in }),
            " ",
            t("text2"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: notification.data.check_out }),
            " "
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsxs("span", { className: " text-xs tracking-widest opacity-60", children: [
              timeSince(notification == null ? void 0 : notification.created_at),
              " "
            ] }),
            notification.read_at == null && /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full" })
          ] })
        ]
      },
      index
    )) })
  ] });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Notifications
}, Symbol.toStringTag, { value: "Module" }));
function DeleteUserForm$1({ className = "" }) {
  const [open, setOpen] = useState(false);
  const passwordInput = useRef();
  const { width } = useWindowDimensions();
  const { t } = useTranslation("translation", {
    keyPrefix: "profile.section3"
  });
  const {
    data,
    setData: setData2,
    delete: destroy,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("admin.profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => {
        setOpen(false);
        reset();
      },
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t("title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: t("subtitle") })
    ] }),
    width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DialogTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            t("submit")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { children: [
            t("dialogTitle"),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DialogDescription, { children: [
            t("dialogDescreption"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1 ",
                isFocused: true,
                placeholder: t("placeholder")
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setOpen(false),
                children: t("cancel")
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  t("delete")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DrawerTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            t("submit")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DrawerContent, { children: [
        /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
          /* @__PURE__ */ jsxs(DrawerTitle, { children: [
            t("dialogTitle"),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DrawerDescription, { children: [
            t("dialogDescreption"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 px-4", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1",
                isFocused: true,
                placeholder: t("placeholder")
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  t("delete")
                ]
              }
            ),
            /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm$1
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm$1({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const {
    data,
    setData: setData2,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const { t } = useTranslation("translation", { keyPrefix: "profile.section2" });
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t("title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: t("subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, children: [
      /* @__PURE__ */ jsx("div", { className: "md:flex my-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full  bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "current_password",
            value: t("form.password")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData2("current_password", e.target.value),
            type: "password",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.current_password,
            className: "mt-2"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password",
              value: t("form.newPassword")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password",
              ref: passwordInput,
              value: data.password,
              onChange: (e) => setData2("password", e.target.value),
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password_confirmation",
              value: t("form.confirmPassword")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password_confirmation",
              value: data.password_confirmation,
              onChange: (e) => setData2("password_confirmation", e.target.value),
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password_confirmation,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: processing,
            type: "submit",
            className: "mt-2 w-1/4",
            variant: "secondary",
            children: t("form.submit")
          }
        ) }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: t("form.submit") })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm$1
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation$1({
  mustVerifyEmail,
  status,
  className = ""
}) {
  const user = usePage().props.auth.user;
  const { t } = useTranslation("translation", {
    keyPrefix: "profile.section1"
  });
  const { data, setData: setData2, patch, errors, processing } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("admin.profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: t("title") }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "first_name",
              value: t("form.firstName")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "first_name",
              value: data.first_name,
              onChange: (e) => setData2("first_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.first_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "last_name",
              value: t("form.lastName")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "last_name",
              value: data.last_name,
              onChange: (e) => setData2("last_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.last_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("form.email") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("form.emailDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("form.email") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "email",
              value: data.email,
              onChange: (e) => setData2("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "phone", value: t("form.phone") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("form.phoneDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "phone", value: t("form.phone") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "phone",
              value: data.phone,
              onChange: (e) => setData2("phone", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.phone, className: "mt-2" })
        ] })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800 dark:text-gray-200", children: [
          t("form.emailValidation"),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("form.verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
              children: [
                t("form.sendEmailValidation"),
                " "
              ]
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400", children: t("form.validationSended") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled: processing,
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: t("form.submit")
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation$1
}, Symbol.toStringTag, { value: "Module" }));
function Edit$1({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
        UpdateProfileInformation$1,
        {
          mustVerifyEmail,
          status
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm$1, {}) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm$1, { className: "max-w-xl" }) })
    ] }) })
  ] });
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$3 = ["JPG", "PNG", "GIF"];
function CreatePromotion({ promotion }) {
  const [importedFiles, setImportedFiles] = useState([]);
  const [dbImages, setDbImages] = useState(promotion == null ? void 0 : promotion.assets);
  const { t } = useTranslation("translation", {
    keyPrefix: "promotions.form"
  });
  const { data, setData: setData2, post, errors, clearErrors, processing } = useForm({
    promo_value: promotion ? promotion.promo_value : "",
    promo_descreption: promotion ? promotion.promo_descreption : "",
    promo_start_date: promotion ? promotion.promo_start_date : "",
    promo_end_date: promotion ? promotion.promo_end_date : "",
    assets: [],
    remouved_assets: [],
    required_assets: false
  });
  const [dateRange, setDateRange] = useState({
    from: promotion ? new Date(promotion.promo_start_date) : "",
    to: promotion ? new Date(promotion.promo_end_date) : ""
  });
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const remouveAsset = (index) => {
    setData2((prevData) => ({
      ...prevData,
      remouved_assets: [...prevData.remouved_assets, index]
    }));
    setDbImages((prevDbImages) => {
      const updatedDbImages = prevDbImages.filter(
        (image) => image.id !== index
      );
      setData2((prevData) => ({
        ...prevData,
        required_assets: updatedDbImages.length === 0
      }));
      return updatedDbImages;
    });
  };
  const submit = (e) => {
    e.preventDefault();
    promotion ? post(route("promotions.update", promotion.promotion_id)) : post(route("promotions.store"));
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("promo_start_date", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("promo_end_date", formattedDate);
    }
    setDateRange(range);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: promotion ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: promotion ? t("editTitle") : t("createTitle")
      }
    ),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date de promotion",
              value: t("date")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("dateDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "Date de promotion",
              value: t("date")
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_start_date,
              className: "mt-2"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_end_date,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_value",
              value: t("value")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("valueDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_value",
              value: t("value")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "promo_value",
              value: data.promo_value,
              onChange: (e) => setData2("promo_value", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_value,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("descreptionDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "promo_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.promo_descreption,
              onContentChange: ({ html }) => {
                setData2("promo_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.promo_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: t("assetsDescreption") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$3,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        " ",
        promotion && /* @__PURE__ */ jsx(
          DbImageViewer,
          {
            assets: dbImages,
            remouveAsset
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          disabled: processing,
          children: promotion ? t("editBtn") : t("createBtn")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreatePromotion
}, Symbol.toStringTag, { value: "Module" }));
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
function EventCardFooter({ promotion }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "promotions.card"
  });
  const promotion_permission = usePage().props.promotion_permission;
  const [processing, setProcessing] = React__default.useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 w-full", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      t("createdBy"),
      " :",
      " ",
      /* @__PURE__ */ jsxs("span", { children: [
        promotion.user.first_name,
        " ",
        promotion.user.last_name
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      promotion_permission.update && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          Switch,
          {
            checked: promotion.is_active,
            disabled: processing,
            onCheckedChange: () => {
              router.post(
                route("promotions.toggle.activity"),
                {
                  promotion_id: promotion.promotion_id
                },
                {
                  preserveState: true,
                  preserveScroll: true,
                  onStart: () => {
                    setProcessing(true);
                  },
                  onFinish: () => {
                    setProcessing(false);
                  }
                }
              );
            }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 ", children: promotion.is_active ? t("swichOn") : t("swichOff") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        promotion_permission.update && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            disabled: processing,
            onClick: () => router.get(
              route(
                "promotions.edit",
                promotion.promotion_id
              ),
              {},
              {
                onStart: () => {
                  setProcessing(true);
                },
                onFinish: () => {
                  setProcessing(false);
                }
              }
            ),
            children: t("edit")
          }
        ),
        promotion_permission.delete && /* @__PURE__ */ jsx(
          DeleteeDialog,
          {
            id: promotion.promotion_id,
            url: "promotions.destroy",
            message: t("deletePromotionDescreption")
          }
        )
      ] })
    ] })
  ] });
}
function PromotionCard({ promotion }) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "promotions.card"
  });
  return /* @__PURE__ */ jsxs(Card, { className: "transition-transform ease-in-out duration-700 relative my-6 ", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { className: "h-full ", children: promotion.assets.map((asset, index) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: `Selected ${index}`,
              className: "rounded-md object-cover aspect-video w-full"
            }
          )
        },
        index
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary left-0 text-secondary-foreground" }),
      /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary right-0 text-secondary-foreground" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: " font-bold text-xl flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-destructive text-2xl font-bold", children: [
          "- ",
          promotion.promo_value,
          " ",
          t("da"),
          " "
        ] }),
        /* @__PURE__ */ jsx("div", { children: promotion.is_active ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: t("activeState") }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: t("inactiveState") }) })
      ] }),
      isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(CardContent, { children: [
          promotion.promo_start_date == promotion.promo_end_date ? /* @__PURE__ */ jsxs("div", { children: [
            t("date"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: promotion.promo_start_date })
          ] }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("startDate"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: promotion.promo_start_date })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              t("endDate"),
              " :",
              " ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: promotion.promo_end_date })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
              t("descreption"),
              " :",
              " "
            ] }),
            /* @__PURE__ */ jsx(
              RichEditor,
              {
                autofocus: false,
                editable: false,
                content: promotion.promo_descreption
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(EventCardFooter, { promotion }) })
      ] })
    ] }),
    width >= 767 && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 right-1/2 translate-x-1/2 z-20", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: buttonVariants({
          variant: "outline",
          size: "icon"
        }),
        onClick: () => setIsOpen(!isOpen),
        children: /* @__PURE__ */ jsx(
          ChevronUp,
          {
            className: cn(
              "h-4 w-4 transition-transform ease-in-out duration-700 ",
              isOpen === false ? "rotate-180" : "rotate-0"
            )
          }
        )
      }
    ) })
  ] });
}
function Promotions({ promotions: promotions2, promotion_permission }) {
  const { t } = useTranslation("translation", { keyPrefix: "promotions" });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const [processing, setProcessing] = React__default.useState(false);
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: promotion_permission.create && /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        disabled: processing,
        onClick: () => router.get(
          route("promotions.create"),
          {},
          {
            onStart: () => {
              setProcessing(true);
            },
            onFinish: () => {
              setProcessing(false);
            }
          }
        ),
        children: t("createBtn")
      }
    ) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: promotions2.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold p-4", children: t("pageHeading") }),
      promotions2.map((promo) => /* @__PURE__ */ jsx(
        PromotionCard,
        {
          promotion: promo
        },
        promo.promotion_id
      ))
    ] }) : /* @__PURE__ */ jsx(EmptyPage, { text: t("emptyPromotions"), icon: TicketMinus }) })
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Promotions
}, Symbol.toStringTag, { value: "Module" }));
function RoleForm({ role, permissions, permissions_actions }) {
  const { t } = useTranslation("translation", { keyPrefix: "roles.form" });
  const { data, setData: setData2, put, post, errors, processing } = useForm({
    role_name: role ? role.role_name : "",
    prevName: role ? role.role_name : "",
    permissions: role ? role.permissions.map((permission) => permission.permission_id) : []
  });
  const handleCheckboxChange = (id) => {
    if (data.permissions.includes(id)) {
      setData2(
        "permissions",
        data.permissions.filter((permissionId) => permissionId !== id)
      );
    } else {
      setData2("permissions", [...data.permissions, id]);
    }
  };
  const handleAllPermissionsCheck = (entity, e) => {
    if (e) {
      permissions.map(
        (permission) => permission.permission_name.split("-")[0] == entity && data.permissions.find((p) => p == permission.permission_id) ? setData2((data2) => {
          data2.permissions.splice(
            data2.permissions.findIndex(
              (p) => p == permission.permission_id
            ),
            1
          );
          return { ...data2 };
        }) : null
      );
      permissions.map(
        (permission) => permission.permission_name.split("-")[0] == entity ? setData2((data2) => {
          data2.permissions.push(permission.permission_id);
          return { ...data2 };
        }) : null
      );
    } else {
      permissions.forEach(
        (permission) => permission.permission_name.split("-")[0] == entity && setData2((data2) => {
          data2.permissions.splice(
            data2.permissions.indexOf(
              data2.permissions.find(
                (p) => p == permission.permission_id
              )
            ),
            1
          );
          return { ...data2 };
        })
      );
    }
  };
  const submit = (e) => {
    e.preventDefault();
    role ? put(route("roles.update", role.role_id)) : post(route("roles.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: role ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: role ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "role_name", value: t("name") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("nameDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "role_name", value: t("name") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "role_name",
              value: data.role_name,
              onChange: (e) => setData2("role_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.role_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { value: t("promotions") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("promotionsDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex bg-card p-2 rounded", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "permissions",
                className: "w-1/4 ",
                value: t("promotions")
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex justify-between w-3/4", children: permissions_actions.map((action) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center mb-2",
                children: /* @__PURE__ */ jsx(InputLabel, { htmlFor: action, children: action })
              },
              action
            )) })
          ] }),
          permissions.map((permission, idx) => {
            var _a;
            return /* @__PURE__ */ jsx("div", { children: permissions[idx] != 0 && ((_a = permissions[idx - 1]) == null ? void 0 : _a.permission_name.split("-")[0]) != permission.permission_name.split(
              "-"
            )[0] && /* @__PURE__ */ jsxs("div", { className: "mb-4 flex bg-card p-2 rounded", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-1/4", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: permission.permission_name,
                    checked: permissions.filter(
                      (per) => per.permission_name.split(
                        "-"
                      )[0] == permission.permission_name.split(
                        "-"
                      )[0]
                    ).every(
                      (element) => data.permissions.includes(
                        element.permission_id
                      )
                    ),
                    onCheckedChange: (e) => handleAllPermissionsCheck(
                      permission.permission_name.split(
                        "-"
                      )[0],
                      e
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: permission.permission_name.split(
                      "-"
                    )[0],
                    children: permission.permission_name.split(
                      "-"
                    )[0]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-between w-3/4", children: permissions.map(
                (perm) => perm.permission_name.split(
                  "-"
                )[0] == permission.permission_name.split(
                  "-"
                )[0] && /* @__PURE__ */ jsx(
                  "div",
                  {
                    children: /* @__PURE__ */ jsx(
                      Checkbox,
                      {
                        id: perm.permission_id,
                        checked: data.permissions.includes(
                          perm.permission_id
                        ),
                        onCheckedChange: () => handleCheckboxChange(
                          perm.permission_id
                        )
                      }
                    )
                  },
                  perm.permission_id
                )
              ) })
            ] }) }, idx);
          })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          disabled: processing,
          children: role ? t("editBtn") : t("createBtn")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoleForm
}, Symbol.toStringTag, { value: "Module" }));
const roleColumns = [
  {
    accessorKey: "role",
    cell: ({ row }) => {
      const role = row.original;
      return /* @__PURE__ */ jsx("div", { children: role.role_name });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "role" })
  },
  {
    accessorKey: "permissions",
    cell: ({ row }) => {
      const role = row.original;
      const { width } = useWindowDimensions();
      const [isopen, setIsOpen] = React__default.useState(false);
      const { t } = useTranslation("translation", {
        keyPrefix: "roles"
      });
      return width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open: isopen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsx(
          DialogTrigger,
          {
            className: cn(buttonVariants({ variant: "outline" })),
            children: t("permissions")
          }
        ),
        /* @__PURE__ */ jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxs(DialogTitle, { className: "text-left rtl:text-right rtl:pr-4", children: [
              t("dialogHeader"),
              " ",
              role.role_name
            ] }),
            /* @__PURE__ */ jsx(DialogDescription, { className: "flex flex-wrap", children: role.permissions.map((permission) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-2 py-1",
                children: permission.permission_name
              },
              permission.permission_id
            )) })
          ] }),
          /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setIsOpen(false),
              children: t("cancel")
            }
          ) })
        ] })
      ] }) : /* @__PURE__ */ jsxs(Drawer, { open: isopen, onOpenChange: setIsOpen, children: [
        /* @__PURE__ */ jsxs(DrawerTrigger, { children: [
          t("permissions"),
          " "
        ] }),
        /* @__PURE__ */ jsxs(DrawerContent, { children: [
          /* @__PURE__ */ jsxs(DrawerHeader, { children: [
            /* @__PURE__ */ jsxs(DrawerTitle, { className: "text-left rtl:text-right", children: [
              t("dialogHeader"),
              " ",
              role.role_name,
              " "
            ] }),
            /* @__PURE__ */ jsx(DrawerDescription, { className: "flex flex-wrap", children: role.permissions.map((permission) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-2 py-1",
                children: permission.permission_name
              },
              permission.permission_id
            )) })
          ] }),
          /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) }) })
        ] })
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "permissions" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const role = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      const [processing, setProcessing] = React__default.useState(false);
      const role_permission = usePage().props.role_permission;
      const { t } = useTranslation("translation", {
        keyPrefix: "roles"
      });
      const handleDelete = () => {
        router.delete(route("roles.destroy", role.role_id), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            setopen(false);
            setIsOpen(false);
          },
          onStart: () => {
            setProcessing(true);
          },
          onFinish: () => {
            setProcessing(false);
          }
        });
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen ? true : open,
          onOpenChange: () => setopen(!open),
          children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
              /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              role_permission.update && /* @__PURE__ */ jsx(DropdownMenuItem, { className: "p-0", children: /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => router.get(
                    route("roles.edit", role.role_id),
                    {},
                    {
                      onSuccess: () => {
                        setopen(false);
                        setIsOpen(false);
                      },
                      onStart: () => {
                        setProcessing(true);
                      },
                      onFinish: () => {
                        setProcessing(false);
                      }
                    }
                  ),
                  disabled: processing,
                  variant: "ghost",
                  children: [
                    /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsx("span", { children: t("edit") })
                  ]
                }
              ) }),
              role_permission.delete && /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(
                      DialogTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          t("delete")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsxs(DialogTitle, { children: [
                          t("deleteDialogHeader"),
                          " "
                        ] }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: t("deleteRoleDescreption") })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => setIsOpen(false),
                            children: t("cancel")
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            disabled: processing,
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              t("delete")
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsxs(
                      DrawerTrigger,
                      {
                        className: buttonVariants({
                          variant: "destructive"
                        }),
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                          t("delete")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsxs(DrawerTitle, { children: [
                          t("deleteDialogHeader"),
                          " "
                        ] }),
                        /* @__PURE__ */ jsxs(DrawerDescription, { children: [
                          t("deleteRoleDescreption"),
                          " "
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleDelete(),
                            disabled: processing,
                            className: "flex justify-center",
                            children: [
                              /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                              t("delete")
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) })
                      ] })
                    ] })
                  ]
                }
              ) })
            ] })
          ]
        }
      );
    }
  }
];
function Roles({ roles: roles2, role_permission }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const [processing, setProcessing] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "roles"
  });
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: role_permission.create && /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        disabled: processing,
        onClick: () => router.get(
          route("roles.create"),
          {},
          {
            onStart: () => {
              setProcessing(true);
            },
            onFinish: () => {
              setProcessing(false);
            }
          }
        ),
        children: t("create")
      }
    ) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: roleColumns,
        data: roles2.data,
        paginate: roles2,
        selection: false
      }
    ) })
  ] });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Roles
}, Symbol.toStringTag, { value: "Module" }));
const featuresColumns = [
  {
    accessorKey: "featureName",
    cell: ({ row }) => {
      const features2 = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        features2.features_name
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "featureName" })
  },
  {
    accessorKey: "needValue",
    cell: ({ row }) => {
      const feature = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        feature.need_value ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: /* @__PURE__ */ jsx(Check, { size: 18 }) }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: /* @__PURE__ */ jsx(X, { size: 18 }) }),
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "needValue" })
  },
  {
    accessorKey: "categorie",
    cell: ({ row }) => {
      const feature = row.original;
      return /* @__PURE__ */ jsx("span", { children: feature.category.categorie_name });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "categorie" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const feature = row.original;
      const [isopen, setIsOpen] = React__default.useState(false);
      const [Editopen, setEditOpen] = React__default.useState(false);
      const [open, setopen] = React__default.useState(false);
      const { width } = useWindowDimensions();
      const [deleting, setDeleting] = React__default.useState(false);
      const { t } = useTranslation("translation", {
        keyPrefix: "features.form"
      });
      const { data, setData: setData2, put, errors, processing } = useForm({
        features_name: feature.features_name,
        categorie_id: feature.category.categorie_id,
        need_value: feature.need_value
      });
      const submit = (e) => {
        e.preventDefault();
        put(route("features.update", feature.feature_id), {
          onSuccess: () => {
            setopen(false);
            setEditOpen(false);
          }
        });
      };
      const handleDelete = () => {
        router.delete(route("features.destroy", feature.feature_id), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            setopen(false);
            setIsOpen(false);
          },
          onStart: () => {
            setDeleting(true);
          },
          onFinish: () => {
            setDeleting(false);
          }
        });
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen || Editopen ? true : open,
          onOpenChange: () => setopen(!open),
          children: [
            /* @__PURE__ */ jsxs(
              DropdownMenuTrigger,
              {
                className: cn(buttonVariants({ variant: "ghost" })),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
                  /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
              /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: Editopen,
                  onOpenChange: setEditOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DialogTrigger, { className: "flex justify-center", children: [
                      /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: t("edit") })
                    ] }),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsx(DialogTitle, { children: t("editHeader") }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: t("editHeader") })
                      ] }),
                      /* @__PURE__ */ jsxs(
                        "form",
                        {
                          className: "grid items-start gap-4 px-4",
                          onSubmit: submit,
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "features_name",
                                  value: t("name")
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  placeholder: t(
                                    "placeholder"
                                  ),
                                  id: "features_name",
                                  value: data.features_name,
                                  onChange: (e) => setData2(
                                    "features_name",
                                    e.target.value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.features_name,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "categorie_id",
                                  value: t("categorie")
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  id: "categorie_id",
                                  disabled: true,
                                  value: feature.category.categorie_name
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.categorie_id,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                              /* @__PURE__ */ jsx(
                                Checkbox,
                                {
                                  id: "need_value",
                                  checked: data.need_value,
                                  onCheckedChange: () => setData2(
                                    "need_value",
                                    !data.need_value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "need_value",
                                  value: t("needValue")
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsx(
                              Button,
                              {
                                variant: "secondary",
                                type: "submit",
                                disabled: processing,
                                children: t("save")
                              }
                            )
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: Editopen,
                  onOpenChange: setEditOpen,
                  children: [
                    /* @__PURE__ */ jsxs(DrawerTrigger, { className: "flex justify-center", children: [
                      /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                      /* @__PURE__ */ jsx("span", { children: t("edit") })
                    ] }),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsx(DrawerTitle, { children: t("editHeader") }),
                        /* @__PURE__ */ jsx(DrawerDescription, { children: t("editHeader") })
                      ] }),
                      /* @__PURE__ */ jsxs(
                        "form",
                        {
                          className: "grid items-start gap-4 px-4",
                          onSubmit: submit,
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "features_name",
                                  value: t("name")
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  placeholder: t(
                                    "placeholder"
                                  ),
                                  id: "features_name",
                                  value: data.features_name,
                                  onChange: (e) => setData2(
                                    "features_name",
                                    e.target.value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.features_name,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "categorie_id",
                                  value: t("categorie")
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  id: "categorie_id",
                                  disabled: true,
                                  value: feature.category.categorie_name
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputError,
                                {
                                  message: errors.categorie_id,
                                  className: "mt-2"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                              /* @__PURE__ */ jsx(
                                Checkbox,
                                {
                                  id: "need_value",
                                  checked: data.need_value,
                                  onCheckedChange: () => setData2(
                                    "need_value",
                                    !data.need_value
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                InputLabel,
                                {
                                  htmlFor: "need_value",
                                  value: t("needValue")
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsx(
                              Button,
                              {
                                variant: "secondary",
                                type: "submit",
                                disabled: processing,
                                children: t("save")
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) }) })
                    ] })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { children: width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open: isopen, onOpenChange: setIsOpen, children: [
                /* @__PURE__ */ jsxs(
                  DialogTrigger,
                  {
                    className: buttonVariants({
                      variant: "destructive"
                    }),
                    children: [
                      /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                      t("delete")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(DialogContent, { children: [
                  /* @__PURE__ */ jsxs(DialogHeader, { children: [
                    /* @__PURE__ */ jsxs(DialogTitle, { children: [
                      t("deleteHeader"),
                      " "
                    ] }),
                    /* @__PURE__ */ jsx(DialogDescription, { children: t("deleteDescreption") })
                  ] }),
                  /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "secondary",
                        onClick: () => setIsOpen(false),
                        children: t("cancel")
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "destructive",
                        onClick: () => handleDelete(),
                        className: "flex justify-center",
                        disabled: deleting,
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                          t("delete")
                        ]
                      }
                    )
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxs(Drawer, { open: isopen, onOpenChange: setIsOpen, children: [
                /* @__PURE__ */ jsxs(
                  DrawerTrigger,
                  {
                    className: buttonVariants({
                      variant: "destructive"
                    }),
                    children: [
                      /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
                      t("delete")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(DrawerContent, { children: [
                  /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                    /* @__PURE__ */ jsxs(DrawerTitle, { children: [
                      t("deleteHeader"),
                      " "
                    ] }),
                    /* @__PURE__ */ jsxs(DrawerDescription, { children: [
                      t("deleteDescreption"),
                      " "
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "destructive",
                        onClick: () => handleDelete(),
                        className: "flex justify-center",
                        disabled: deleting,
                        children: [
                          /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                          t("delete")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) })
                  ] })
                ] })
              ] }) })
            ] })
          ]
        }
      );
    }
  }
];
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
function FeatureCreateDialog({ categorys }) {
  const { t } = useTranslation("translation", { keyPrefix: "features.form" });
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const { width } = useWindowDimensions();
  const { data, setData: setData2, post, errors, processing } = useForm({
    features_name: "",
    categorie_id: "",
    need_value: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("features.store"), {
      onSuccess: () => {
        setOpen(false);
      }
    });
  };
  const addToCategorys = (value) => {
    router.post(
      route("categorys.store"),
      { categorie_name: value },
      {
        onSuccess: () => {
          setSearchValue("");
          setIsOpen(false);
        }
      }
    );
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(
        DialogTrigger,
        {
          className: cn(buttonVariants({ variant: "secondary" })),
          onClick: () => !categorys && router.reload({ only: ["categorys"] }),
          children: t("create")
        }
      ),
      /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": void 0, children: [
        /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: t("dialogHeader") }) }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "grid items-start gap-4 px-4",
            onSubmit: submit,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "features_name",
                    value: t("name")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: t("placeholder"),
                    id: "features_name",
                    value: data.features_name,
                    onChange: (e) => setData2("features_name", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.features_name,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "categorie_id",
                    value: t("categorie"),
                    className: "w-fit"
                  }
                ),
                /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
                  /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": open,
                      className: "w-full justify-between",
                      children: [
                        selectedCategory ? selectedCategory : t("selectInput"),
                        /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
                    /* @__PURE__ */ jsx(
                      CommandInput,
                      {
                        placeholder: t("searchInput"),
                        value: searchValue,
                        onValueChange: (newValue) => setSearchValue(newValue)
                      }
                    ),
                    /* @__PURE__ */ jsxs(CommandList, { children: [
                      /* @__PURE__ */ jsx(CommandEmpty, { children: searchValue ? /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "outline",
                          onClick: () => addToCategorys(
                            searchValue
                          ),
                          children: /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              t("add"),
                              " "
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "font-bold my-2", children: searchValue }),
                            /* @__PURE__ */ jsx("div", { children: t("add2") })
                          ] })
                        }
                      ) : /* @__PURE__ */ jsx("span", { children: t("searchInput") }) }),
                      /* @__PURE__ */ jsx(CommandGroup, { children: categorys && categorys.map(
                        (category) => /* @__PURE__ */ jsxs(
                          CommandItem,
                          {
                            value: category.categorie_id,
                            onSelect: (currentValue) => {
                              setData2(
                                "categorie_id",
                                category.categorie_id
                              );
                              setSelectedCategory(
                                currentValue === category.categorie_id ? "" : currentValue
                              );
                              setIsOpen(
                                false
                              );
                            },
                            children: [
                              category.categorie_name,
                              /* @__PURE__ */ jsx(
                                CheckIcon,
                                {
                                  className: cn(
                                    "ml-auto h-4 w-4",
                                    selectedCategory === category.categorie_name ? "opacity-100" : "opacity-0"
                                  )
                                }
                              )
                            ]
                          },
                          category.categorie_id
                        )
                      ) })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.categorie_id,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    id: "need_value",
                    checked: data.need_value,
                    onCheckedChange: () => setData2("need_value", !data.need_value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "need_value",
                    value: t("needValue")
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  type: "submit",
                  disabled: processing,
                  children: t("createSubmit")
                }
              )
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(
      DrawerTrigger,
      {
        className: cn(buttonVariants({ variant: "secondary" })),
        onClick: () => !categorys && router.reload({ only: ["categorys"] }),
        children: t("create")
      }
    ),
    /* @__PURE__ */ jsxs(DrawerContent, { "aria-describedby": void 0, children: [
      /* @__PURE__ */ jsx(DrawerHeader, { className: "text-left", children: /* @__PURE__ */ jsxs(DrawerTitle, { children: [
        t("dialogHeader"),
        " "
      ] }) }),
      /* @__PURE__ */ jsxs("form", { className: "grid items-start gap-4 px-4", onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "features_name", value: t("name") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: t("placeholder"),
              id: "features_name",
              value: data.features_name,
              onChange: (e) => setData2("features_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.features_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "categorie_id",
              value: t("categorie"),
              className: "w-fit"
            }
          ),
          /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
            /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                role: "combobox",
                "aria-expanded": open,
                className: "w-full justify-between",
                children: [
                  selectedCategory ? selectedCategory : t("selectInput"),
                  /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
              /* @__PURE__ */ jsx(
                CommandInput,
                {
                  placeholder: t("searchInput"),
                  value: searchValue,
                  onValueChange: (newValue) => setSearchValue(newValue)
                }
              ),
              /* @__PURE__ */ jsxs(CommandList, { children: [
                /* @__PURE__ */ jsx(CommandEmpty, { children: searchValue ? /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => addToCategorys(
                      searchValue
                    ),
                    children: /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        " ",
                        t("add"),
                        " "
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "font-bold", children: searchValue }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        " ",
                        t("add2")
                      ] })
                    ] })
                  }
                ) : /* @__PURE__ */ jsx("span", { children: t("searchInput") }) }),
                /* @__PURE__ */ jsx(CommandGroup, { children: categorys && categorys.map((category) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: category.categorie_id,
                    onSelect: (currentValue) => {
                      setData2(
                        "categorie_id",
                        category.categorie_id
                      );
                      setSelectedCategory(
                        currentValue === category.categorie_id ? "" : currentValue
                      );
                      setIsOpen(false);
                    },
                    children: [
                      category.categorie_name,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            selectedCategory === category.categorie_name ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  category.categorie_id
                )) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.categorie_id,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "need_value",
              checked: data.need_value,
              onCheckedChange: () => setData2("need_value", !data.need_value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "need_value",
              value: t("needValue")
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            type: "submit",
            disabled: processing,
            children: t("createSubmit")
          }
        )
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) }) })
    ] })
  ] });
}
function CategoryDialog({ category, mode }) {
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowDimensions();
  const { t } = useTranslation("translation", { keyPrefix: "features.form" });
  const { data, setData: setData2, post, put, errors, processing } = useForm({
    categorie_name: category ? category == null ? void 0 : category.categorie_name : ""
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("categorys.store"), {
        onSuccess: () => {
          setOpen(false);
        }
      });
    } else {
      put(route("categorys.update", category.categorie_id), {
        onSuccess: () => setOpen(false)
      });
    }
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: mode == "create" ? t("addCategorie") : t("edit") }) }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: mode == "create" ? t("addCategorieHeader") : t("editCategorietHeader") }),
          /* @__PURE__ */ jsx(DialogDescription, { children: mode == "create" ? t("addCategorieHeader") : t("editCategorietHeader") })
        ] }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "grid items-start gap-4 px-4",
            onSubmit: submit,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "categorie_name",
                    value: t("categorieName")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: t("categoriePlaceholder"),
                    id: "categorie_name",
                    value: data.categorie_name,
                    onChange: (e) => setData2("categorie_name", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.categorie_name,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "secondary",
                  type: "submit",
                  disabled: processing,
                  children: [
                    mode == "create" ? t("createSubmit") : t("save"),
                    " "
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: mode == "create" ? t("addCategorie") : t("edit") }) }),
    /* @__PURE__ */ jsxs(DrawerContent, { children: [
      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
        /* @__PURE__ */ jsx(DrawerTitle, { children: mode == "create" ? t("addCategorieHeader") : t("editCategorietHeader") }),
        /* @__PURE__ */ jsx(DrawerDescription, { children: mode == "create" ? t("addCategorieHeader") : t("editCategorietHeader") })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "grid items-start gap-4 px-4", onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "categorie_name",
              value: t("categorieName")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: t("categoriePlaceholder"),
              id: "categorie_name",
              value: data.categorie_name,
              onChange: (e) => setData2("categorie_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.categorie_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "secondary",
            type: "submit",
            disabled: processing,
            children: [
              mode == "create" ? t("createSubmit") : t("save"),
              " "
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) }) })
    ] })
  ] });
}
function CategoryCard({ category }) {
  const { t } = useTranslation("translation", { keyPrefix: "features.form" });
  return /* @__PURE__ */ jsxs(Card, { className: "rounded-lg border-none mt-6 bg-muted", children: [
    /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsx("div", { className: "bg-card p-2 rounded", children: category.categorie_name }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ jsx(CategoryDialog, { mode: "edit", category }),
      /* @__PURE__ */ jsx(
        DeleteeDialog,
        {
          id: category.categorie_id,
          url: "categorys.destroy",
          message: t("deleteCategorieDescreption")
        }
      )
    ] })
  ] });
}
function Features({ features: features2, categorys }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const { t } = useTranslation("translation", { keyPrefix: "features" });
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "features", className: "mt-2", children: [
      /* @__PURE__ */ jsx(TabsList, { className: "w-full flex justify-start rtl:justify-end bg-transparent border-b-2 rounded-none	", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-start", children: [
        /* @__PURE__ */ jsx(
          TabsTrigger,
          {
            value: "features",
            className: "mr-2 font-bold text-xl rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-primary data-[state=active]:text-primary shadow-none ",
            children: t("title")
          }
        ),
        /* @__PURE__ */ jsx(
          TabsTrigger,
          {
            onClick: () => !categorys && router.reload({ only: ["categorys"] }),
            value: "category",
            className: "mr-2 font-bold text-xl rounded-none bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-primary data-[state=active]:text-primary ",
            children: t("categorie")
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "features", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end rtl:justify-start ", children: /* @__PURE__ */ jsx(FeatureCreateDialog, { categorys }) }),
        /* @__PURE__ */ jsx(PlaceholderContent, { children: features2.length ? /* @__PURE__ */ jsx(
          DataTable,
          {
            columns: featuresColumns,
            data: features2,
            selection: true
          }
        ) : /* @__PURE__ */ jsx(EmptyPage, { icon: Hotel, text: t("emptyFeatures") }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "category", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end rtl:justify-start", children: /* @__PURE__ */ jsx(CategoryDialog, { mode: "create" }) }),
        /* @__PURE__ */ jsx(PlaceholderContent, { children: categorys.length ? /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: categorys && categorys.map((category) => /* @__PURE__ */ jsx(
          CategoryCard,
          {
            category
          },
          category.categorie_id
        )) }) : /* @__PURE__ */ jsx(
          EmptyPage,
          {
            icon: Hotel,
            text: t("emptyCategories")
          }
        ) })
      ] })
    ] })
  ] });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Features
}, Symbol.toStringTag, { value: "Module" }));
function Room({ room, categorys }) {
  const { t } = useTranslation("translation", { keyPrefix: "rooms.room" });
  const [processing, setProcessing] = React__default.useState(false);
  const categoryExists = (features2, category_id) => {
    return features2.some((item) => item.categorie_id === category_id);
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") + " " + room.room_number }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") + " " + room.room_number }),
    /* @__PURE__ */ jsxs(PlaceholderContent, { children: [
      /* @__PURE__ */ jsxs(Carousel, { children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map((asset, index) => /* @__PURE__ */ jsx(
          CarouselItem,
          {
            className: "md:basis-1/2 lg:basis-1/3",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: asset.url,
                alt: `Selected ${index}`,
                className: "rounded-md object-cover aspect-video w-full"
              }
            )
          },
          index
        )) }),
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary text-secondary-foreground" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary text-secondary-foreground" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-bold text-xl", children: [
            room.type.type_designation,
            " ",
            t("with"),
            " ",
            room.beeds_number,
            " ",
            t("beeds"),
            " "
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-bold text-xl bg-muted p-2 rounded", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              t("price"),
              " : "
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-destructive", children: [
              room.room_price,
              " ",
              t("da")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8", children: categorys.map((category) => /* @__PURE__ */ jsx("div", { children: categoryExists(
          room.features,
          category.categorie_id
        ) && /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "m-4", children: [
            category.categorie_name,
            /* @__PURE__ */ jsx(Separator, {})
          ] }),
          room.features.map(
            (feature) => feature.categorie_id === category.categorie_id && /* @__PURE__ */ jsxs(
              "div",
              {
                className: "mx-2",
                children: [
                  feature.features_name,
                  " ",
                  feature.need_value ? " : " + feature.pivot.valeur : null
                ]
              },
              feature.feature_id
            )
          )
        ] }) }) }, category.categorie_id)) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
            t("description"),
            " :",
            " "
          ] }),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              editable: false,
              content: room.room_descreption,
              onContentChange: ({ html }) => {
                setData("room_descreption", html);
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          disabled: processing,
          onClick: () => router.get(
            route("rooms.edit", room.room_number),
            {},
            {
              onStart: () => {
                setProcessing(true);
              },
              onFinish: () => {
                setProcessing(false);
              }
            }
          ),
          children: [
            t("edit"),
            " ",
            /* @__PURE__ */ jsx(Pencil, { className: "mx-2 h-3.5 w-3.5 text-muted-foreground/70" })
          ]
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Room
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$2 = ["JPG", "PNG", "GIF"];
function RoomForm({ types, categorys, room }) {
  const [type, setType] = React__default.useState(room == null ? void 0 : room.type.type_designation);
  const [open, setOpen] = React__default.useState(false);
  const [searchValue, setSearchValue] = React__default.useState("");
  const [importedFiles, setImportedFiles] = useState([]);
  const [dbImages, setDbImages] = useState(room == null ? void 0 : room.assets);
  const { t } = useTranslation("translation", {
    keyPrefix: "rooms.roomForm"
  });
  const { data, setData: setData2, post, errors, clearErrors, processing } = useForm({
    room_number: room ? room.room_number : "",
    type_id: room ? room.type_id : "",
    room_descreption: room ? room.room_descreption : "",
    room_price: room ? room.room_price : "",
    beeds_number: room ? room.beeds_number : "",
    features: room ? room.features.map((feature) => {
      return {
        feature_id: feature.feature_id,
        features_name: feature.features_name,
        need_value: feature.need_value,
        value: feature.pivot.valeur
      };
    }) : [],
    assets: [],
    remouved_assets: [],
    required_assets: room && (room == null ? void 0 : room.assets.length) > 0 ? false : true
  });
  const remouveAsset = (index) => {
    setData2((prevData) => ({
      ...prevData,
      remouved_assets: [...prevData.remouved_assets, index]
    }));
    setDbImages((prevDbImages) => {
      const updatedDbImages = prevDbImages.filter(
        (image) => image.id !== index
      );
      setData2((prevData) => ({
        ...prevData,
        required_assets: updatedDbImages.length === 0
      }));
      return updatedDbImages;
    });
  };
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const submit = (e) => {
    e.preventDefault();
    room ? post(route("rooms.update", room.room_number)) : post(route("rooms.store"));
  };
  const isPressedFn = (feature) => data.features.some((f) => f.id === feature.feature_id);
  const handleFeatures = (pressed, feature) => {
    setData2((data2) => {
      if (pressed) {
        data2.features.push({
          id: feature.feature_id,
          name: feature.features_name,
          need_value: feature.need_value,
          value: ""
        });
      } else {
        data2.features.splice(
          data2.features.indexOf(
            data2.features.find((f) => f.id === feature.feature_id)
          ),
          1
        );
      }
      return { ...data2 };
    });
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_number", value: t("roomNumber") }),
        /* @__PURE__ */ jsx(LabelDescreption, { children: t("roomNumberDescreption") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_number", value: t("roomNumber") }),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "102",
            id: "room_number",
            value: data.room_number,
            onChange: (e) => setData2("room_number", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.room_number, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_price", value: t("price") }),
        /* @__PURE__ */ jsx(LabelDescreption, { children: t("priceDescreption") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_price", value: t("price") }),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "5500 DA",
            id: "room_price",
            value: data.room_price,
            onChange: (e) => setData2("room_price", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.room_price, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "beeds_number",
            value: t("beedsNumber")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: t("beedsNumberDescreption") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "beeds_number",
            value: t("beedsNumber")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            placeholder: "3",
            id: "beeds_number",
            value: data.beeds_number,
            onChange: (e) => setData2("beeds_number", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.beeds_number,
            className: "mt-2"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_type", value: t("type") }),
        /* @__PURE__ */ jsx(LabelDescreption, { children: t("typeDescreption") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_type",
            value: t("type"),
            className: "mb-2"
          }
        ),
        /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              role: "combobox",
              "aria-expanded": open,
              className: "w-full justify-between",
              children: [
                type ? type : t("typeSelect"),
                /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(PopoverContent, { children: /* @__PURE__ */ jsxs(Command, { children: [
            /* @__PURE__ */ jsx(
              CommandInput,
              {
                placeholder: t("typeSearch"),
                value: searchValue,
                onValueChange: (newValue) => setSearchValue(newValue)
              }
            ),
            /* @__PURE__ */ jsxs(CommandList, { children: [
              /* @__PURE__ */ jsxs(CommandEmpty, { children: [
                /* @__PURE__ */ jsx("div", { children: t("emptyTypeMessage") }),
                /* @__PURE__ */ jsx("div", { className: "font-bold py-2", children: searchValue }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("types.store"),
                    method: "post",
                    as: "button",
                    data: {
                      type_designation: searchValue
                    },
                    className: cn(
                      buttonVariants({
                        variant: "secondary"
                      })
                    ),
                    children: t("emptyTypeButton")
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(CommandGroup, { children: types.map(
                ({ type_id, type_designation }) => /* @__PURE__ */ jsxs(
                  CommandItem,
                  {
                    value: type_designation,
                    onSelect: (currentValue) => {
                      setData2(
                        "type_id",
                        type_id
                      );
                      setType(
                        currentValue === type ? "" : currentValue
                      );
                      setOpen(false);
                    },
                    children: [
                      type_designation,
                      /* @__PURE__ */ jsx(
                        CheckIcon,
                        {
                          className: cn(
                            "ml-auto h-4 w-4",
                            type === type_designation ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  type_id
                )
              ) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.type_id, className: "mt-2" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: t("descreption")
          }
        ),
        /* @__PURE__ */ jsx(LabelDescreption, { children: t("descreptionDescreption") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "room_descreption",
            value: t("descreption")
          }
        ),
        /* @__PURE__ */ jsx(
          RichEditor,
          {
            autofocus: false,
            content: data.room_descreption,
            onContentChange: ({ html }) => {
              setData2("room_descreption", html);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.room_descreption,
            className: "mt-2"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:flex  my-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "room_features", value: t("features") }),
        /* @__PURE__ */ jsx(LabelDescreption, { children: t("featuresDescreption") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow flex gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-2/3", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "room_features",
              value: t("features")
            }
          ),
          /* @__PURE__ */ jsxs(Accordion, { type: "multiple", children: [
            categorys.map((category) => /* @__PURE__ */ jsxs(
              AccordionItem,
              {
                className: "my-2 bg-card ",
                value: category.categorie_name,
                children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { className: "flex flex-wrap justify-center", children: category.categorie_name }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: " px-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: category.feature.map(
                    (feature, idx) => {
                      return /* @__PURE__ */ jsx(
                        Toggle,
                        {
                          pressed: isPressedFn(
                            feature
                          ),
                          onPressedChange: (p) => handleFeatures(
                            p,
                            feature
                          ),
                          children: feature.features_name
                        },
                        idx
                      );
                    }
                  ) }) })
                ]
              },
              category.categorie_id
            )),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.features,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 w-1/3 ", children: data.features.map(
          (feature, idx) => feature.need_value ? /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: feature.name }),
            /* @__PURE__ */ jsx(
              Input,
              {
                className: "mt-2 w-full bg-card",
                value: feature.value,
                onChange: (e) => {
                  setData2((data2) => {
                    data2.features[idx].value = e.target.value;
                    return { ...data2 };
                  });
                }
              }
            )
          ] }, idx) : null
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "assets", value: t("assets") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("assetsDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "assets", value: t("assets") }),
          /* @__PURE__ */ jsx(
            FileUploader,
            {
              handleChange: handleFiles,
              name: "file",
              id: "assets",
              types: fileTypes$2,
              multiple: true,
              children: /* @__PURE__ */ jsx(MyFileUploader, {})
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.assets, className: "mt-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        ImagesViewer,
        {
          images: importedFiles,
          errors,
          deleteImage
        }
      ),
      room && /* @__PURE__ */ jsx(
        DbImageViewer,
        {
          assets: dbImages,
          remouveAsset
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        className: "mt-2 w-1/4",
        variant: "secondary",
        disabled: processing,
        children: room ? t("edit") : t("submit")
      }
    ) })
  ] });
}
function RoomCreate({ types, categorys }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("rooms.createTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("rooms.createTitle") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto ", children: /* @__PURE__ */ jsx(RoomForm, { types, categorys }) }) })
  ] });
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoomCreate
}, Symbol.toStringTag, { value: "Module" }));
function RoomEdit({ room, types, categorys }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("rooms.editTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("rooms.editTitle") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto ", children: /* @__PURE__ */ jsx(
      RoomForm,
      {
        types,
        categorys,
        room: room[0]
      }
    ) }) })
  ] });
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoomEdit
}, Symbol.toStringTag, { value: "Module" }));
const columns = [
  {
    accessorKey: "roomNumber",
    cell: ({ row }) => {
      const room = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        room.room_number
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "roomNumber" })
  },
  {
    accessorKey: "type",
    cell: ({ row }) => {
      const room = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        " ",
        room.type.type_designation,
        " "
      ] });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "type" })
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const room = row.original;
      return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center rtl:justify-start space-x-2", children: room.room_status === "hors service" ? /* @__PURE__ */ jsxs(Badge, { variant: "danger", children: [
        room.room_status,
        " "
      ] }) : room.room_status === "libre" ? /* @__PURE__ */ jsxs(Badge, { variant: "success", children: [
        room.room_status,
        " "
      ] }) : /* @__PURE__ */ jsxs(Badge, { variant: "warning", children: [
        room.room_status,
        " "
      ] }) });
    },
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "status" })
  },
  {
    accessorKey: "price",
    header: ({ column }) => /* @__PURE__ */ jsx(ColumnHeader, { title: "price" }),
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "DZD"
      }).format(row.original.room_price);
      return /* @__PURE__ */ jsx("div", { className: "font-medium", children: formatted });
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const room = row.original;
      const room_permission = usePage().props.room_permission;
      const { t } = useTranslation("translation", { keyPrefix: "rooms" });
      return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
          /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
          room_permission.viewAny && /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("rooms.show", room.room_number),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                t("show")
              ]
            }
          ) }),
          room_permission.update && /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("rooms.edit", room.room_number),
              className: "flex w-full",
              children: [
                /* @__PURE__ */ jsx(Pencil, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                t("edit")
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          room_permission.update && /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(
              Switch,
              {
                checked: room.room_status !== "hors service",
                onCheckedChange: () => {
                  router.post(
                    route("rooms.toggle.status"),
                    {
                      room_number: room.room_number,
                      room_status: room.room_status === "hors service" ? "libre" : "hors service"
                    }
                  );
                }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ml-2 ", children: room.room_status === "hors service" ? t("aviable") : t("inaviable") })
          ] })
        ] })
      ] });
    }
  }
];
function RoomCard$1({ room }) {
  const { t } = useTranslation("translation", { keyPrefix: "rooms" });
  return /* @__PURE__ */ jsxs(Card, { className: "rounded-lg border-none mt-6", children: [
    /* @__PURE__ */ jsxs(CardContent, { className: "p-6 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(CardTitle, { children: [
          t("roomNumber"),
          " ",
          room.room_number,
          " / ",
          room.type.type_designation
        ] }),
        /* @__PURE__ */ jsxs(CardDescription, { children: [
          t("price"),
          " : ",
          room.room_price,
          " ",
          t("da")
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center space-x-2", children: room.room_status === "hors service" ? /* @__PURE__ */ jsxs(Badge, { variant: "danger", children: [
        room.room_status,
        " "
      ] }) : room.room_status === "libre" ? /* @__PURE__ */ jsxs(Badge, { variant: "success", children: [
        room.room_status,
        " "
      ] }) : /* @__PURE__ */ jsxs(Badge, { variant: "warning", children: [
        room.room_status,
        " "
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs(CardDescription, { className: "flex", children: [
        /* @__PURE__ */ jsx(
          Switch,
          {
            checked: room.room_status !== "hors service",
            onCheckedChange: () => {
              router.post(
                route("rooms.toggle.status"),
                {
                  room_number: room.room_number,
                  room_status: room.room_status === "hors service" ? "libre" : "hors service"
                },
                {
                  preserveState: true,
                  preserveScroll: true
                }
              );
            }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "mx-2 ", children: room.room_status === "hors service" ? t("aviable") : t("inaviable") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("rooms.show", room.room_number),
            className: "flex w-full",
            children: [
              /* @__PURE__ */ jsx(Eye, { className: "mx-2 h-3.5 w-3.5 text-muted-foreground/70" }),
              " ",
              t("show")
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("rooms.edit", room.room_number),
            className: "flex w-full",
            children: [
              /* @__PURE__ */ jsx(Pencil, { className: "mx-2 h-3.5 w-3.5 text-muted-foreground/70" }),
              t("edit")
            ]
          }
        ) })
      ] })
    ] })
  ] }, room.room_number);
}
function TopButton({ href, text }) {
  const { width } = useWindowDimensions();
  const [processing, setProcessing] = React__default.useState(false);
  const handleButton = () => {
    router.visit(href, {
      method: "get",
      onStart: () => {
        setProcessing(true);
      },
      onFinish: () => {
        setProcessing(false);
      }
    });
  };
  return width <= 767 ? /* @__PURE__ */ jsx("div", { className: "fixed bottom-10 right-10 ", children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "secondary",
      className: "h-16 w-16 rounded-full opacity-85",
      onClick: () => {
        handleButton();
      },
      disabled: processing,
      children: /* @__PURE__ */ jsx(CirclePlus, {})
    }
  ) }) : /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "secondary",
      onClick: () => {
        handleButton();
      },
      disabled: processing,
      children: text
    }
  ) });
}
function MobilePagination({ data }) {
  useTranslation("translation", { keyPrefix: "rooms" });
  const navigateTo = (url) => {
    router.visit(url, {
      preserveState: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start gap-16 px-2 mt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex text-sm text-muted-foreground", children: [
      data.to - data.from + 1,
      " of ",
      data.total,
      " "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.prev_page_url,
          onClick: () => navigateTo(data.first_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to first page" }),
            /* @__PURE__ */ jsx(DoubleArrowLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.prev_page_url,
          onClick: () => navigateTo(data.prev_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to previous page" }),
            /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      data.links.slice(1, -1).filter(
        (link, index, array) => link.active || index > 0 && array[index - 1].active
      ).map((link) => /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: link.active ? "outline" : "ghost",
          className: "h-8 w-8 p-0",
          onClick: () => navigateTo(link.url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to next page" }),
            link.label
          ]
        }
      ) }, link.label)),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.next_page_url,
          onClick: () => navigateTo(data.next_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to next page" }),
            /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "h-8 w-8 p-0",
          disabled: !data.next_page_url,
          onClick: () => navigateTo(data.last_page_url),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to last page" }),
            /* @__PURE__ */ jsx(DoubleArrowRightIcon, { className: "h-4 w-4" })
          ]
        }
      ) })
    ] }) }) })
  ] });
}
function Rooms$1({ rooms: rooms2, room_permission }) {
  const { width } = useWindowDimensions();
  const { t } = useTranslation("translation", { keyPrefix: "rooms" });
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    room_permission.create && /* @__PURE__ */ jsx(
      TopButton,
      {
        href: route("rooms.create"),
        text: t("topButton")
      }
    ),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: rooms2.data.length ? width <= 767 ? /* @__PURE__ */ jsxs("div", { children: [
      rooms2.data.map((room) => /* @__PURE__ */ jsx(RoomCard$1, { room }, room.room_number)),
      /* @__PURE__ */ jsx(MobilePagination, { data: rooms2 })
    ] }) : /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto invisible md:visible", children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns,
        data: rooms2.data,
        paginate: rooms2,
        selection: false
      }
    ) }) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        icon: Hotel,
        text: t("emptyText")
      }
    ) })
  ] });
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rooms$1
}, Symbol.toStringTag, { value: "Module" }));
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      ref,
      className: cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border dark:border-gray-700 dark:bg-gray-900 border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(CaretSortIcon, { className: "h-4 w-4 opacity-50" }) })
      ]
    }
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUpIcon, {})
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDownIcon, {})
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
function ConsommationDialog({ services: services2, mode, consumption }) {
  var _a, _b;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "consumptions.form"
  });
  const { width } = useWindowDimensions();
  const { data, setData: setData2, post, put, errors, processing, reset } = useForm({
    consumption_name: consumption ? consumption == null ? void 0 : consumption.consumption_name : "",
    consumption_price: consumption ? consumption == null ? void 0 : consumption.consumption_price : "",
    service_id: consumption ? consumption == null ? void 0 : consumption.service_id : ""
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("consumptions.store"), {
        onSuccess: () => {
          setOpen(false);
          reset(
            "consumption_name",
            "consumption_price",
            "service_id"
          );
        }
      });
    } else {
      put(route("consumptions.update", consumption.consumption_id), {
        onSuccess: () => setOpen(false)
      });
    }
  };
  if (width >= 767) {
    return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: mode == "create" ? t("createBtn") : t("editBtn") }) }),
      /* @__PURE__ */ jsxs(DialogContent, { "aria-describedby": void 0, children: [
        /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: mode == "create" ? t("createDialogTitle") : t("editDialogTitle") }) }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            className: "grid items-start gap-4 px-4",
            onSubmit: submit,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "service_id",
                    value: t("service"),
                    className: "w-fit"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Select,
                  {
                    name: "service_id",
                    onValueChange: (value) => {
                      setData2("service_id", value);
                    },
                    children: [
                      /* @__PURE__ */ jsxs(SelectTrigger, { className: " w-full", children: [
                        /* @__PURE__ */ jsx(
                          SelectValue,
                          {
                            placeholder: data.service_id ? "" : t("servicePlaceholder")
                          }
                        ),
                        (_a = services2.find(
                          (s) => s.service_id == data.service_id
                        )) == null ? void 0 : _a.service_name
                      ] }),
                      /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
                        /* @__PURE__ */ jsxs(SelectLabel, { children: [
                          t("service"),
                          " "
                        ] }),
                        services2.map((service) => /* @__PURE__ */ jsx(
                          SelectItem,
                          {
                            value: service.service_id,
                            children: service.service_name
                          },
                          service.service_id
                        ))
                      ] }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.service_id,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "consumption_name",
                    value: t("name")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: t("namePlaceholder"),
                    id: "consumption_name",
                    value: data.consumption_name,
                    onChange: (e) => setData2("consumption_name", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.consumption_name,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "consumption_price",
                    value: t("price")
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    className: "mt-2",
                    id: "consumption_price",
                    value: data.consumption_price,
                    onChange: (e) => setData2("consumption_price", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.consumption_price,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  type: "submit",
                  disabled: processing,
                  children: mode == "create" ? t("createSubmit") : t("editSubmit")
                }
              )
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", children: mode == "create" ? t("createDialogTitle") : t("editDialogTitle") }) }),
    /* @__PURE__ */ jsxs(DrawerContent, { "aria-describedby": void 0, children: [
      /* @__PURE__ */ jsx(DrawerHeader, { className: "text-left", children: /* @__PURE__ */ jsx(DrawerTitle, { children: mode == "create" ? t("createDialogTitle") : t("editDialogTitle") }) }),
      /* @__PURE__ */ jsxs("form", { className: "grid items-start gap-4 px-4", onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_id",
              value: t("service"),
              className: "w-fit"
            }
          ),
          /* @__PURE__ */ jsxs(
            Select,
            {
              name: "service_id",
              onValueChange: (value) => {
                setData2("service_id", value);
              },
              children: [
                /* @__PURE__ */ jsxs(SelectTrigger, { className: " w-full", children: [
                  /* @__PURE__ */ jsx(
                    SelectValue,
                    {
                      placeholder: data.service_id ? "" : t("servicePlaceholder")
                    }
                  ),
                  (_b = services2.find(
                    (s) => s.service_id == data.service_id
                  )) == null ? void 0 : _b.service_name
                ] }),
                /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
                  /* @__PURE__ */ jsxs(SelectLabel, { children: [
                    " ",
                    t("service"),
                    " "
                  ] }),
                  services2.map((service) => /* @__PURE__ */ jsx(
                    SelectItem,
                    {
                      value: service.service_id,
                      children: service.service_name
                    },
                    service.service_id
                  ))
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_id,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "consumption_name",
              value: t("name")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: t("namePlaceholder"),
              id: "consumption_name",
              value: data.consumption_name,
              onChange: (e) => setData2("consumption_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.consumption_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "consumption_price",
              value: t("price")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2",
              id: "consumption_price",
              value: data.consumption_price,
              onChange: (e) => setData2("consumption_price", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.consumption_price,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            type: "submit",
            disabled: processing,
            children: mode == "create" ? t("createSubmit") : t("editSubmit")
          }
        )
      ] }),
      /* @__PURE__ */ jsx(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) }) })
    ] })
  ] });
}
function ConsommationCard({ consumption, services: services2 }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "consumptions.card"
  });
  return /* @__PURE__ */ jsxs(Card, { className: "w-full", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold text-xl", children: consumption.consumption_name }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Badge, { variant: "success", children: [
        consumption.service.service_name,
        " "
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      t("price"),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-destructive font-bold", children: consumption.consumption_price }),
      " ",
      t("da")
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "gap-4", children: [
      /* @__PURE__ */ jsx(
        DeleteeDialog,
        {
          id: consumption.consumption_id,
          url: "consumptions.destroy",
          message: t("deleteConsumptionDescreption")
        }
      ),
      /* @__PURE__ */ jsx(
        ConsommationDialog,
        {
          consumption,
          services: services2,
          mode: "edit"
        }
      )
    ] })
  ] });
}
function Consumptions({ consumptions: consumptions2, services: services2 }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const { t } = useTranslation("translation", { keyPrefix: "consumptions" });
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(ConsommationDialog, { services: services2, mode: "create" }) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: consumptions2.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold p-4", children: t("listHeader") }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: consumptions2.map((consumption) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        ConsommationCard,
        {
          consumption,
          services: services2
        }
      ) }, consumption.consumption_id)) })
    ] }) : /* @__PURE__ */ jsx(
      EmptyPage,
      {
        text: t("emptyConsumptions"),
        icon: HandPlatter
      }
    ) })
  ] });
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Consumptions
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes$1 = ["JPG", "PNG", "GIF"];
function CreateService() {
  const { t } = useTranslation("translation", { keyPrefix: "services.form" });
  const { data, setData: setData2, post, errors, clearErrors, processing } = useForm({
    service_name: "",
    service_descreption: "",
    assets: []
  });
  const [importedFiles, setImportedFiles] = useState([]);
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("services.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: t("name")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("nameDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: t("name")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              placeholder: t("placeholder"),
              id: "service_name",
              value: data.service_name,
              onChange: (e) => setData2("service_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("descreptionDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.service_descreption,
              onContentChange: ({ html }) => {
                setData2("service_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: t("assetsDescreption") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes$1,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          disabled: processing,
          children: t("createBtn")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateService
}, Symbol.toStringTag, { value: "Module" }));
const fileTypes = ["JPG", "PNG", "GIF"];
function ServiceForm({ service }) {
  const { t } = useTranslation("translation", { keyPrefix: "services.form" });
  const [importedFiles, setImportedFiles] = useState([]);
  const [dbImages, setDbImages] = useState(service == null ? void 0 : service.assets);
  const { data, setData: setData2, post, errors, clearErrors, processing } = useForm({
    service_name: service ? service == null ? void 0 : service.service_name : "",
    service_descreption: service ? service == null ? void 0 : service.service_descreption : "",
    assets: [],
    remouved_assets: [],
    required_assets: false
  });
  const remouveAsset = (index) => {
    setData2((prevData) => ({
      ...prevData,
      remouved_assets: [...prevData.remouved_assets, index]
    }));
    setDbImages((prevDbImages) => {
      const updatedDbImages = prevDbImages.filter(
        (image) => image.id !== index
      );
      setData2((prevData) => ({
        ...prevData,
        required_assets: updatedDbImages.length === 0
      }));
      return updatedDbImages;
    });
  };
  const handleFiles = (files) => {
    if (!files || !files.length)
      return;
    const newFiles = Array.from(files);
    setImportedFiles((prevData) => {
      const updatedFiles = newFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file)
      }));
      return [...prevData, ...updatedFiles];
    });
    setData2("assets", [...data.assets, ...newFiles]);
  };
  const deleteImage = (index) => {
    setImportedFiles((prevData) => {
      const updatedFiles = [...prevData];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    const updatedAssets = [...data.assets];
    updatedAssets.splice(index, 1);
    setData2("assets", updatedAssets);
    clearErrors(`assets.${index}`);
  };
  const submit = (e) => {
    e.preventDefault();
    service ? post(route("services.update", service.service_id)) : post(route("services.store"));
  };
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: service ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PageHeading, { title: service ? t("editTitle") : t("createTitle") }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: t("name")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("nameDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_name",
              value: t("name")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              placeholder: t("placeholder"),
              id: "service_name",
              value: data.service_name,
              onChange: (e) => setData2("service_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("descreptionDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "service_descreption",
              value: t("descreption")
            }
          ),
          /* @__PURE__ */ jsx(
            RichEditor,
            {
              autofocus: false,
              content: data.service_descreption,
              onContentChange: ({ html }) => {
                setData2("service_descreption", html);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.service_descreption,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(LabelDescreption, { children: t("assetsDescreption") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "assets",
                value: t("assets")
              }
            ),
            /* @__PURE__ */ jsx(
              FileUploader,
              {
                handleChange: handleFiles,
                name: "file",
                id: "assets",
                types: fileTypes,
                multiple: true,
                children: /* @__PURE__ */ jsx(MyFileUploader, {})
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.assets,
                className: "mt-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          ImagesViewer,
          {
            images: importedFiles,
            errors,
            deleteImage
          }
        ),
        service && /* @__PURE__ */ jsx(
          DbImageViewer,
          {
            assets: dbImages,
            remouveAsset
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          disabled: processing,
          children: service ? t("editBtn") : t("createBtn")
        }
      ) })
    ] }) })
  ] });
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServiceForm
}, Symbol.toStringTag, { value: "Module" }));
function ServiceCardFooter({ service }) {
  const service_permission = usePage().props.service_permission;
  const [process, setProcess] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "services.card"
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    service_permission.update && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Switch,
        {
          checked: service.availability,
          disabled: process,
          onCheckedChange: () => {
            router.post(
              route("services.toggle.availability"),
              {
                service_id: service.service_id
              },
              {
                preserveState: true,
                preserveScroll: true,
                onStart: () => {
                  setProcess(true);
                },
                onFinish: () => {
                  setProcess(false);
                }
              }
            );
          }
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "ml-2 ", children: service.availability ? t("toggleOff") : t("toggleOn") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      service_permission.update && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          disabled: process,
          onClick: () => router.get(
            route("services.edit", service.service_id),
            {},
            {
              onStart: () => {
                setProcess(true);
              },
              onFinish: () => {
                setProcess(false);
              }
            }
          ),
          children: t("editBtn")
        }
      ),
      service_permission.delete && /* @__PURE__ */ jsx(
        DeleteeDialog,
        {
          id: service.service_id,
          url: "services.destroy",
          message: t("deleteServiceDescreption")
        }
      )
    ] })
  ] });
}
function ServiceCard$1({ service }) {
  const { width } = useWindowDimensions();
  const { t } = useTranslation("translation", { keyPrefix: "services.card" });
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: "transition-all ease-in-out duration-700 relative my-6 ",
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Carousel, { children: [
          /* @__PURE__ */ jsx(CarouselContent, { className: "h-full ", children: service.assets.map((asset, index) => /* @__PURE__ */ jsx(
            CarouselItem,
            {
              className: "md:basis-1/2 lg:basis-1/3",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: asset.url,
                  alt: `Selected ${index}`,
                  className: "rounded-md object-cover aspect-video w-full"
                }
              )
            },
            index
          )) }),
          /* @__PURE__ */ jsx(CarouselPrevious, { className: "bg-secondary left-0 text-secondary-foreground" }),
          /* @__PURE__ */ jsx(CarouselNext, { className: "bg-secondary right-0 text-secondary-foreground" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between w-full", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold text-xl flex flex-row items-start justify-between", children: [
            /* @__PURE__ */ jsx("div", { children: service.service_name }),
            /* @__PURE__ */ jsx("div", { className: "m-0", children: service.availability ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: t("aviable") }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: t("inaviable") }) })
          ] }),
          isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg my-4", children: [
                t("descreption"),
                " :",
                " "
              ] }),
              /* @__PURE__ */ jsx(
                RichEditor,
                {
                  autofocus: false,
                  editable: false,
                  content: service.service_descreption
                }
              )
            ] }),
            /* @__PURE__ */ jsx(CardFooter, { className: "justify-end gap-4 ", children: /* @__PURE__ */ jsx(ServiceCardFooter, { service }) })
          ] })
        ] }),
        width >= 767 && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 right-1/2 translate-x-1/2 z-20", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: buttonVariants({
              variant: "outline",
              size: "icon"
            }),
            onClick: () => setIsOpen(!isOpen),
            children: /* @__PURE__ */ jsx(
              ChevronUp,
              {
                className: cn(
                  "h-4 w-4 transition-transform ease-in-out duration-700 ",
                  isOpen === false ? "rotate-180" : "rotate-0"
                )
              }
            )
          }
        ) })
      ]
    },
    service.service_id
  );
}
function Services$1({ services: services2, service_permission }) {
  const { toast: toast2 } = useToast();
  const [process, setProcess] = React__default.useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "services" });
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(AdminPanelLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: service_permission.create && /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        disabled: process,
        onClick: () => router.get(
          route("services.create"),
          {},
          {
            onStart: () => {
              setProcess(true);
            },
            onFinish: () => {
              setProcess(false);
            }
          }
        ),
        children: t("createBtn")
      }
    ) }),
    /* @__PURE__ */ jsx(PlaceholderContent, { children: services2.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold p-4", children: t("listHeader") }),
      services2.map((service) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ServiceCard$1, { service }) }, service.service_id))
    ] }) : /* @__PURE__ */ jsx(EmptyPage, { text: t("emptyServices"), icon: HandPlatter }) })
  ] });
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Services$1
}, Symbol.toStringTag, { value: "Module" }));
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center bg-muted", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex w-1/2 h-screen flex-col sm:justify-center items-center bg-secondary", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/assets/sidi-el-noui-logo-removebg.png",
        className: "object-content w-1/3 md:w-2/3 rounded-xl relative z-10  hover:corsur-pointer  transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 flex flex-col sm:justify-center items-center pt-6 sm:pt-2 bg-muted", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(AppLogo, { className: "w-20 h-20" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg", children })
    ] })
  ] });
}
function AdminLogin({ status, canResetPassword }) {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    auth: "",
    password: "",
    remember: false
  });
  const { t } = useTranslation("translation", { keyPrefix: "auth" });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("admin.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "auth",
            value: t("auth")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "auth",
            type: "text",
            name: "auth",
            value: data.auth,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData2("auth", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.auth, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password",
            value: t("password")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onCheckedChange: (e) => setData2("remember", !data.remember)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600 dark:text-gray-400", children: t("remember") })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: t("forget")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "ms-4 w-1/4",
            disabled: processing,
            children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : t("submit")
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminLogin
}, Symbol.toStringTag, { value: "Module" }));
function ConfirmPassword() {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    password: ""
  });
  const { t } = useTranslation("translation", { keyPrefix: "auth" });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: t("confirmText") }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: t("password") }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(Button, { className: "ms-4", variant: "secondary", size: "sm", children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : t("confirm") }) })
    ] })
  ] });
}
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData: setData2, post, processing, errors } = useForm({
    email: ""
  });
  const { t } = useTranslation("translation", { keyPrefix: "auth" });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: t("forgetText") }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600 dark:text-green-400", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData2("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(Button, { className: "ms-4", variant: "secondary", size: "sm", children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : t("resetLink") }) })
    ] })
  ] });
}
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Login({ status, canResetPassword }) {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    auth: "",
    password: "",
    remember: false
  });
  const { t } = useTranslation("translation", { keyPrefix: "auth" });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "auth", value: t("auth") }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "auth",
            type: "text",
            name: "auth",
            value: data.auth,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData2("auth", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.auth, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: t("password") }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onCheckedChange: (e) => setData2("remember", !data.remember)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600 dark:text-gray-400", children: t("remember") })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
            children: t("forget")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "ms-4 w-1/4",
            disabled: processing,
            children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : tt("submit")
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-input dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary dark:focus:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-md shadow-sm " + className,
      ref: input
    }
  );
});
function ResetPassword({ token, email: email2 }) {
  const { data, setData: setData2, post, processing, errors, reset } = useForm({
    token,
    email: email2,
    password: "",
    password_confirmation: ""
  });
  const { t } = useTranslation("translation", { keyPrefix: "auth" });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData2("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: t("password") }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData2("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: t("confirmPassword")
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            id: "password_confirmation",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData2("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.password_confirmation,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(Button, { disabled: processing, variant: "secondary", children: t("reset") }) })
    ] })
  ] });
}
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600 dark:text-green-400", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function getNavList(activeSection) {
  const { t } = useTranslation("translation", { keyPrefix: "client.navbar" });
  return [
    {
      label: t("home"),
      href: "#home-section",
      active: activeSection === "home-section"
    },
    {
      label: t("rooms"),
      href: "#rooms-section",
      active: activeSection === "rooms-section"
    },
    {
      label: t("services"),
      href: "#services-section",
      active: activeSection === "services-section"
    },
    {
      label: t("contactUs"),
      href: "#contact-section",
      active: activeSection === "contact-section"
    }
  ];
}
function NavLinks() {
  const [activeSection, setActiveSection] = useState("home-section");
  const menuList = getNavList(activeSection);
  const current = route().current();
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", function(e) {
        });
      });
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row lg:gap-10 gap-6", children: current != "client.index" ? menuList.map((link, idx) => /* @__PURE__ */ jsx(
    Link,
    {
      href: route("client.index"),
      className: "hover:text-primary ",
      children: link.label
    },
    idx
  )) : menuList.map((link, idx) => /* @__PURE__ */ jsx(
    "a",
    {
      className: cn(
        "hover:text-primary",
        link.active ? "text-primary hover:text-primary " : ""
      ),
      href: link.href,
      onClick: () => setActiveSection(link.href.slice(1)),
      children: link.label
    },
    idx
  )) });
}
function LinkSheet() {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  return /* @__PURE__ */ jsxs(
    Sheet,
    {
      open: width > 767 ? false : open,
      onOpenChange: () => setOpen(!open),
      children: [
        /* @__PURE__ */ jsx(SheetTrigger, { className: "md:hidden", asChild: true, children: /* @__PURE__ */ jsx(Button, { className: "h-8", variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(MenuIcon, { size: 20 }) }) }),
        /* @__PURE__ */ jsxs(
          SheetContent,
          {
            className: "w-72 px-3 h-full flex flex-col gap-8",
            side: "right",
            children: [
              /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("client.index"),
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(AppLogo, { className: "h-10 w-10" }),
                    /* @__PURE__ */ jsx("h1", { className: "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300", children: "Sidi El Noui" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(NavLinks, {})
            ]
          }
        )
      ]
    }
  );
}
function UserNav() {
  const user = usePage().props.auth.user;
  const [processing, setProcessing] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "client.navbar.userNav"
  });
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          className: "relative h-8 w-8 rounded-full",
          children: /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 relative", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: "#", alt: "Avatar" }),
            /* @__PURE__ */ jsxs(AvatarFallback, { className: "bg-transparent uppercase", children: [
              user.first_name.charAt(0),
              user.last_name.charAt(0)
            ] })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: t("profile") })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium leading-none", children: [
          user == null ? void 0 : user.first_name,
          " ",
          user == null ? void 0 : user.last_name
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", children: user == null ? void 0 : user.email })
      ] }) }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsxs(
          DropdownMenuItem,
          {
            className: "hover:cursor-pointer",
            disabled: processing,
            onClick: () => {
              router.get(
                route("client.profile.edit"),
                {},
                {
                  onStart: () => {
                    setProcessing(true);
                  },
                  onFinish: () => {
                    setProcessing(false);
                  }
                }
              );
            },
            children: [
              /* @__PURE__ */ jsx(User, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
              t("compte")
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          DropdownMenuItem,
          {
            className: "hover:cursor-pointer",
            disabled: processing,
            onClick: () => {
              router.get(
                route("client.bookings.index"),
                {},
                {
                  onStart: () => {
                    setProcessing(true);
                  },
                  onFinish: () => {
                    setProcessing(false);
                  }
                }
              );
            },
            children: [
              /* @__PURE__ */ jsx(BookmarkCheck, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
              t("myBookings")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "hover:cursor-pointer",
          onClick: () => {
            router.post(
              route("logout"),
              {},
              {
                onStart: () => {
                  setProcessing(true);
                },
                onFinish: () => {
                  setProcessing(false);
                }
              }
            );
          },
          disabled: processing,
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-3 text-muted-foreground" }),
            t("logOut")
          ]
        }
      )
    ] })
  ] });
}
function LangSwitch() {
  const { t } = useTranslation("translation", { keyPrefix: "client.navbar" });
  const [processing, setProcessing] = React.useState(false);
  const { i18n: i18n2 } = useTranslation();
  const { locale } = usePage().props;
  const handleSwitch = (lng) => {
    i18n2.changeLanguage(lng);
    router.visit(route("client.switch.lang"), {
      data: { lang: lng },
      preserveState: true,
      preserveScroll: true,
      onStart: () => {
        setProcessing(true);
      },
      onFinish: () => {
        setProcessing(false);
      }
    });
  };
  return /* @__PURE__ */ jsx(TooltipProvider, { disableHoverableContent: true, children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 100, children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        className: "rounded-full w-8 h-8 bg-background",
        variant: "outline",
        size: "icon",
        onClick: () => handleSwitch(locale == "ar" ? "fr" : "ar"),
        disabled: processing,
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 ",
                locale === "ar" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
              ),
              children: "ar"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 ",
                locale === "fr" ? "rotate-0 scale-100" : "rotate-90 scale-0"
              ),
              children: "fr"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Switch langue" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(TooltipContent, { side: "bottom", children: [
      t("swichLang"),
      " "
    ] })
  ] }) });
}
function NavBar() {
  const user = usePage().props.auth.user;
  const { t } = useTranslation("translation", { keyPrefix: "client.navbar" });
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-4 sm:mx-8 flex h-14 items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 lg:space-x-0", children: /* @__PURE__ */ jsx(Link, { href: route("client.index"), children: /* @__PURE__ */ jsx(AppLogo, { className: "w-10 h-10" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "invisible md:visible", children: /* @__PURE__ */ jsx(NavLinks, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-end", children: [
      user ? /* @__PURE__ */ jsx(UserNav, {}) : /* @__PURE__ */ jsx(
        Button,
        {
          size: "sm",
          variant: "secondary",
          onClick: () => router.get(route("login")),
          children: t("login")
        }
      ),
      /* @__PURE__ */ jsx(LangSwitch, {}),
      /* @__PURE__ */ jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsx(LinkSheet, {})
    ] })
  ] }) });
}
const email = "contact@hotelsidielnoui.dz";
const phone = "023358230";
const address = "chéraga alger, Algerie";
const maps = "https://maps.app.goo.gl/PKkyi9AU14F6bXYd9";
const facebook = "https://web.facebook.com/p/Hotel-sidi-el-noui-100088684863459/?locale=fr_FR&_rdc=1&_rdr";
const instagram = "https://www.instagram.com/hotelsidielnoui?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
function Footer() {
  const menuList = getNavList();
  const current = route().current();
  const { t } = useTranslation("translation", {
    keyPrefix: "client.footer"
  });
  return /* @__PURE__ */ jsxs("footer", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:px-28 px-10 py-4 flex flex-col  gap-4 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-row pb-4 flex-col justify-between items-center gap-4 w-full", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `phone:${phone}`,
            className: "flex gap-4 items-center justify-start w-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Phone, {}) }),
              /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-col gap-4 sm:gap-1 ", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  t("phone"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium ", children: phone })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `mailto:${email}`,
            className: "flex gap-4 items-center justify-start w-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Mail, {}) }),
              /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-col gap-4 sm:gap-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  t("email"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: email })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            target: "blank",
            href: maps,
            className: "flex gap-4 items-center justify-start w-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(MapPin, {}) }),
              /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-col gap-4 sm:gap-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  t("address"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: address })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-row flex-col items-start gap-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-center gap-4 sm:w-2/4 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-1/2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold", children: [
              t("links"),
              " "
            ] }),
            current != "client.index" ? menuList.map((link, idx) => /* @__PURE__ */ jsx(
              Link,
              {
                href: route("client.index"),
                className: "hover:text-primary ",
                children: link.label
              },
              idx
            )) : menuList.map((link, idx) => /* @__PURE__ */ jsx(
              "a",
              {
                className: "hover:text-primary",
                href: link.href,
                children: link.label
              },
              idx
            ))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-4 w-1/2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: t("socialMedia") }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: facebook,
                className: "flex gap-4 items-center ",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Facebook, {}) }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium hover:underline", children: "Sidi el noui" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: instagram,
                className: "flex gap-4 items-center  ",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center", children: /* @__PURE__ */ jsx(Instagram, {}) }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium hover:underline", children: "Sidi_el_noui" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:w-2/4 w-full", children: [
          /* @__PURE__ */ jsx(AppLogo, { className: "w-20 h-20" }),
          /* @__PURE__ */ jsxs("div", { children: [
            t("description"),
            " "
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-secondary text-secondary-foreground py-4 px-16 flex justify-between items-center ", children: [
      /* @__PURE__ */ jsx("a", { target: "blank", href: "https://duobix.com", children: "Duobix Software" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { children: "© 2024 Copyright " }),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "font-semibold",
            href: "https://hotelsidielnoui.dz",
            target: "blank",
            children: "SIDI EL NOUI"
          }
        )
      ] })
    ] })
  ] });
}
function ClientLayout({ children }) {
  const { locale } = usePage().props;
  useEffect(() => {
    document.documentElement.dir = locale == "ar" ? "rtl" : "ltr";
  }, [locale]);
  return /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-muted -z-[2]", children: [
      /* @__PURE__ */ jsx(NavBar, {}),
      /* @__PURE__ */ jsx("main", { className: "m-3 sm:m-10 lg:mx-28 min-h-screen ", children }),
      /* @__PURE__ */ jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
function UserDataForm({
  booking_data,
  selectedRooms,
  setFinal,
  errors,
  handleSetData,
  data,
  submit,
  total,
  promotion,
  processing
}) {
  const auth2 = usePage().props.auth;
  const { t } = useTranslation("translation", {
    keyPrefix: "client.aviableRooms"
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative flex gap-2 m-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-1/3 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: t("detailsCard.header") }),
        /* @__PURE__ */ jsxs(CardContent, { className: "flex justify-between p-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("detailsCard.checkIn"),
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking_data.check_in }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "12h00 - 23h00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("detailsCard.checkOut"),
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking_data.check_out }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "07h00 - 12h00" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col items-start p-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            t("detailsCard.time"),
            " "
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
            (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24),
            " ",
            t("detailsCard.nights")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold p-2", children: [
          t("selectionCard.header"),
          " ",
          booking_data.guest_number,
          " ",
          t("selectionCard.adult"),
          " ",
          booking_data.kids_number && /* @__PURE__ */ jsxs(Fragment, { children: [
            t("selectionCard.and"),
            " ",
            booking_data.kids_number,
            " ",
            t("selectionCard.babays"),
            " :",
            " "
          ] }),
          " "
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "p-2", children: selectedRooms.map((room) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "shadow rounded-lg py-1 px-2 mb-1 flex justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                t("selectionCard.rooms"),
                " ",
                room.type.type_designation,
                " "
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "font-bold text-primary", children: [
                room.room_price,
                " ",
                t("da"),
                " x",
                " ",
                (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24),
                " ",
                t("selectionCard.nights")
              ] })
            ]
          },
          room.room_number
        )) }),
        /* @__PURE__ */ jsx(CardFooter, { className: "justify-center p-2", children: /* @__PURE__ */ jsx(Button, { variant: "link", onClick: () => setFinal(false), children: t("selectionCard.btn") }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-2 font-bold", children: t("pricingCard.header") }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-2 text-3xl font-bold text-primary", children: [
          promotion ? /* @__PURE__ */ jsxs("div", { className: "text-xl line-through", children: [
            " ",
            total + promotion.promo_value * selectedRooms.length * (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24),
            " ",
            t("da"),
            " "
          ] }) : null,
          total,
          " ",
          t("da")
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "p-2 text-muted-foreground", children: t("pricingCard.footer") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-2/3 h-fit bg-card p-2 pb-6 rounded-lg", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: t("form.lastName"),
            error: errors.first_name,
            type: "text",
            data: data.first_name,
            setData: handleSetData,
            fieldName: "first_name",
            disabled: auth2.user != null
          }
        ),
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: t("form.firstName"),
            error: errors.last_name,
            type: "text",
            data: data.last_name,
            setData: handleSetData,
            fieldName: "last_name",
            disabled: auth2.user != null
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx(
        FormInput,
        {
          label: t("form.email"),
          error: errors.email,
          type: "email",
          data: data.email,
          setData: handleSetData,
          fieldName: "email",
          disabled: auth2.user != null
        }
      ),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsx(
        FormInput,
        {
          label: t("form.phone"),
          error: errors.phone,
          type: "phone",
          data: data.phone,
          setData: handleSetData,
          fieldName: "phone",
          disabled: auth2.user != null
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          className: "w-1/4",
          disabled: processing,
          children: t("form.submit")
        }
      ) })
    ] }) })
  ] });
}
function RoomsServces({
  rooms: rooms2,
  services: services2,
  booking_data,
  selectedRooms,
  setSelectedRooms,
  data,
  setData: setData2,
  total,
  setTotal,
  beedsNumber,
  setBeedsNumber,
  promotion
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.aviableRooms.roomServce"
  });
  const addRoom = (room) => {
    let nights = (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24);
    promotion ? setTotal(
      total + (room.room_price - promotion.promo_value) * nights
    ) : setTotal(total + room.room_price * nights);
    setBeedsNumber(beedsNumber + Number(room.beeds_number));
    setSelectedRooms([...selectedRooms, room]);
    setData2((prevData) => {
      prevData.rooms.push({ id: room.id, room_price: room.room_price });
      return { ...prevData };
    });
  };
  const generateTableRows = (data2) => {
    const rows = [];
    for (const [roomType, beds] of Object.entries(data2)) {
      let typeRowSpan = 0;
      for (const bed of Object.values(beds)) {
        typeRowSpan += Object.keys(bed).length;
      }
      let firstTypeRow = true;
      for (const [bedNumber, prices] of Object.entries(beds)) {
        let bedRowSpan = Object.keys(prices).length;
        let firstBedRow = true;
        for (const [price, rooms22] of Object.entries(prices)) {
          rows.push(
            /* @__PURE__ */ jsxs("tr", { children: [
              firstTypeRow && /* @__PURE__ */ jsx(
                "td",
                {
                  className: "boreder border-2 border-secondary px-3 align-top ",
                  rowSpan: typeRowSpan,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start ", children: [
                    /* @__PURE__ */ jsx("div", { children: roomType }),
                    /* @__PURE__ */ jsx("div", { children: rooms22[0].features.map(
                      (feature) => /* @__PURE__ */ jsxs(
                        Badge,
                        {
                          className: "m-px",
                          children: [
                            feature.features_name,
                            feature.need_value == true && ": " + feature.pivot.valeur
                          ]
                        },
                        feature.feature_id
                      )
                    ) })
                  ] })
                }
              ),
              firstBedRow && /* @__PURE__ */ jsx(
                "td",
                {
                  className: "boreder border-2 border-secondary px-3 ",
                  rowSpan: bedRowSpan,
                  children: /* @__PURE__ */ jsx("div", { className: "flex", children: Array.from(
                    { length: bedNumber },
                    (_, index) => /* @__PURE__ */ jsx(BedSingle, {}, index)
                  ) })
                }
              ),
              /* @__PURE__ */ jsxs("td", { className: "boreder border-2 border-secondary px-3 ", children: [
                promotion ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("span", { className: "line-through", children: [
                    price,
                    " ",
                    t("da")
                  ] }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    " ",
                    price - promotion.promo_value,
                    " ",
                    t("da")
                  ] })
                ] }) : price + t("da"),
                " "
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "boreder-b border-2 border-b-secondary px-3 flex justify-between items-center", children: [
                rooms22.length,
                " ",
                t("rooms"),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "icon",
                    variant: "outline",
                    className: "z-[1]",
                    disabled: beedsNumber >= booking_data.guest_number || rooms22.length <= 1 && selectedRooms.includes(
                      rooms22[rooms22.length - 1]
                    ) || selectedRooms.includes(
                      rooms22.filter(
                        (r) => r.id !== rooms22[rooms22.length - 1].id
                      )[rooms22.filter(
                        (r) => r.id !== rooms22[rooms22.length - 1].id
                      ).length - 1]
                    ),
                    onClick: () => addRoom(
                      selectedRooms.includes(
                        rooms22[rooms22.length - 1]
                      ) ? rooms22.filter(
                        (r) => r.id !== rooms22[rooms22.length - 1].id
                      )[rooms22.filter(
                        (r) => r.id !== rooms22[rooms22.length - 1].id
                      ).length - 1] : rooms22[rooms22.length - 1]
                    ),
                    children: /* @__PURE__ */ jsx(CirclePlus, {})
                  }
                )
              ] })
            ] }, `${roomType}-${bedNumber}-${price}`)
          );
          firstTypeRow = false;
          firstBedRow = false;
        }
      }
    }
    return rows;
  };
  const increment = (consumption) => {
    setTotal(total + consumption.consumption_price);
    setData2((prevData) => {
      const existingIndex = prevData.consomation.findIndex(
        (c) => c.consumption_id === consumption.consumption_id
      );
      if (existingIndex > -1) {
        prevData.consomation[existingIndex].quantity += 1;
      } else {
        prevData.consomation.push({
          consumption_id: consumption.consumption_id,
          quantity: 1,
          current_consumption_price: consumption.consumption_price,
          name: consumption.consumption_name
        });
      }
      return { ...prevData };
    });
  };
  const decrement = (consumption) => {
    setTotal(total - consumption.consumption_price);
    setData2((prevData) => {
      const existingIndex = prevData.consomation.findIndex(
        (c) => c.consumption_id === consumption.consumption_id
      );
      if (existingIndex > -1) {
        if (prevData.consomation[existingIndex].quantity === 1) {
          prevData.consomation.splice(existingIndex, 1);
        } else {
          prevData.consomation[existingIndex].quantity -= 1;
        }
      }
      return { ...prevData };
    });
  };
  const getQuantity = (consumption_id) => {
    const item = data == null ? void 0 : data.consomation.find(
      (c) => c.consumption_id === consumption_id
    );
    return item ? item.quantity : 0;
  };
  return /* @__PURE__ */ jsxs(
    Accordion,
    {
      type: "single",
      collapsible: true,
      className: "w-3/4",
      defaultValue: "rooms",
      children: [
        /* @__PURE__ */ jsxs(AccordionItem, { value: "rooms", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "bg-card mb-2 p-3 rounded", children: t("rooms") }),
          /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsxs("table", { className: "relative border-muted border-1 border bg-card z-[10]", children: [
            /* @__PURE__ */ jsx("thead", { className: "relative", children: /* @__PURE__ */ jsxs("tr", { className: "border-secondary border-2", children: [
              /* @__PURE__ */ jsxs("th", { className: "w-1/2", children: [
                t("type"),
                " "
              ] }),
              /* @__PURE__ */ jsxs("th", { children: [
                t("beeds"),
                " "
              ] }),
              /* @__PURE__ */ jsxs("th", { className: "w-1/4", children: [
                t("pricing"),
                " "
              ] }),
              /* @__PURE__ */ jsx("th", { className: "w-1/4", children: t("select") })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: generateTableRows(rooms2) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "rooms-1", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "bg-card mb-2 p-3 rounded", children: t("consumptions") }),
          /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("div", { className: "relative bg-card z-[10] p-4 rounded", children: services2.map((service) => /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold", children: service.service_name }),
            /* @__PURE__ */ jsx("div", { children: service.consomation.map((consomation) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex justify-between gap-4 items-center",
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    consomation.consumption_name,
                    " à",
                    " ",
                    /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                      consomation.consumption_price,
                      " ",
                      t("da")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center border rounded p-1 bg-muted", children: [
                    /* @__PURE__ */ jsx(
                      CircleMinus,
                      {
                        onClick: () => decrement(consomation),
                        className: "cursor-pointer hover:text-secondary"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "w-1/2 flex justify-center", children: getQuantity(
                      consomation.consumption_id
                    ) }),
                    /* @__PURE__ */ jsx(
                      CirclePlus,
                      {
                        onClick: () => increment(consomation),
                        className: "cursor-pointer hover:text-secondary"
                      }
                    )
                  ] })
                ]
              },
              consomation.consumption_id
            )) })
          ] }, service.service_id)) }) })
        ] })
      ]
    }
  );
}
function BookingsCard({
  setFinal,
  selectedRooms,
  data,
  total,
  setBeedsNumber,
  beedsNumber,
  setTotal,
  setSelectedRooms,
  setData: setData2,
  booking_data,
  promotion
}) {
  let nights = (new Date(booking_data.check_out) - new Date(booking_data.check_in)) / (1e3 * 60 * 60 * 24);
  const unselectRoom = (room) => {
    promotion ? setTotal(
      total - (room.room_price - promotion.promo_value) * nights
    ) : setTotal(total - room.room_price * nights);
    setBeedsNumber(beedsNumber - Number(room.beeds_number));
    setSelectedRooms(selectedRooms.filter((r) => r.id !== room.id));
    setData2((prevData) => {
      const existingIndex = prevData.rooms.findIndex(
        (r) => r === room.id
      );
      prevData.rooms.splice(existingIndex, 1);
      return { ...prevData };
    });
  };
  const unselectConsommation = (consomation) => {
    setTotal(
      total - consomation.current_consumption_price * consomation.quantity
    );
    setData2((prevData) => {
      const existingIndex = data.consomation.findIndex(
        (c) => c.consumption_id === consomation.consumption_id
      );
      prevData.consomation.splice(existingIndex, 1);
      return { ...prevData };
    });
  };
  const { t } = useTranslation("translation", {
    keyPrefix: "client.aviableRooms.bookingCard"
  });
  return /* @__PURE__ */ jsx("div", { className: "w-1/4 rounded px-1 bg-card ", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-10", children: [
    /* @__PURE__ */ jsxs(
      Button,
      {
        onClick: () => setFinal(true),
        variant: "secondary",
        size: "sm",
        className: "my-4 w-full z-[1] justify-between",
        disabled: selectedRooms == false,
        children: [
          t("btn"),
          " ",
          /* @__PURE__ */ jsx(ChevronRight, {})
        ]
      }
    ),
    total > 0 && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-lg font-bold", children: [
      t("tot"),
      " : ",
      total,
      " ",
      t("da"),
      " "
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      selectedRooms.map((room) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-2 justify-between py-1 ",
          children: [
            /* @__PURE__ */ jsxs(Dialog, { children: [
              /* @__PURE__ */ jsxs(DialogTrigger, { className: "hover:underline", children: [
                t("roomNumber"),
                " : ",
                room.room_number
              ] }),
              /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(DialogHeader, { children: [
                /* @__PURE__ */ jsxs(DialogTitle, { children: [
                  t("room"),
                  " ",
                  room.type.type_designation,
                  " ",
                  t("with"),
                  " ",
                  room.beeds_number,
                  " ",
                  t("beeds"),
                  " ",
                  t("for"),
                  " ",
                  room.room_price,
                  " ",
                  t("da")
                ] }),
                room.assets.length > 0 && /* @__PURE__ */ jsxs(Carousel, { children: [
                  /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map(
                    (asset) => /* @__PURE__ */ jsx(
                      CarouselItem,
                      {
                        children: /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: asset.url,
                            alt: asset.name,
                            className: "w-full h-32 object-cover aspect-video rounded-md"
                          }
                        )
                      },
                      asset.id
                    )
                  ) }),
                  /* @__PURE__ */ jsx(CarouselPrevious, {}),
                  /* @__PURE__ */ jsx(CarouselNext, {})
                ] }),
                room.features.length > 0 && /* @__PURE__ */ jsxs("div", { className: "font-bold flex", children: [
                  t("features"),
                  " :",
                  " "
                ] }),
                /* @__PURE__ */ jsx("div", { children: room.features.map((feature) => /* @__PURE__ */ jsxs(
                  Badge,
                  {
                    className: "m-px",
                    children: [
                      feature.features_name,
                      feature.need_value == true && ": " + feature.pivot.valeur
                    ]
                  },
                  feature.feature_id
                )) }),
                /* @__PURE__ */ jsx(DialogDescription, { children: /* @__PURE__ */ jsx(
                  RichEditor,
                  {
                    className: "bg-transparent border-none",
                    classNames: {
                      content: "text-ellipsis overflow-hidden ... "
                    },
                    autofocus: false,
                    editable: false,
                    content: room.room_descreption,
                    length: 200
                  }
                ) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "icon",
                variant: "outline",
                onClick: () => unselectRoom(room),
                children: /* @__PURE__ */ jsx(CircleMinus, {})
              }
            )
          ]
        },
        room.room_number
      )),
      data == null ? void 0 : data.consomation.map((consomation) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-2 justify-between py-1 ",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("div", { children: consomation.name }),
              /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground text-sm", children: [
                consomation.price,
                " x ",
                consomation.quantity
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "icon",
                variant: "outline",
                onClick: () => unselectConsommation(consomation),
                children: /* @__PURE__ */ jsx(CircleMinus, {})
              }
            )
          ]
        },
        consomation.consumption_id
      ))
    ] })
  ] }) });
}
function AviableRooms({
  rooms: rooms2,
  booking_data,
  services: services2,
  promotion
}) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [total, setTotal] = useState(0);
  const [beedsNumber, setBeedsNumber] = useState(0);
  const [final, setFinal] = useState(false);
  const user = usePage().props.auth.user;
  const { data, setData: setData2, post, errors, processing } = useForm({
    rooms: [],
    consomation: [],
    check_in: booking_data.check_in,
    check_out: booking_data.check_out,
    guest_number: booking_data.guest_number,
    kids_number: booking_data.kids_number,
    first_name: user ? user.first_name : "",
    last_name: user ? user.last_name : "",
    email: user ? user.email : "",
    phone: user ? user.phone : "",
    promo_value: promotion ? promotion.promo_value : null
  });
  const { t } = useTranslation("translation", {
    keyPrefix: "client.aviableRooms"
  });
  const handleSetData = (field, value) => {
    setData2((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("client.store.bookings"));
  };
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("metaDescreption") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "font-bold text-xl m-6 ", children: t("pageHeader") }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-1/2 h-1/2 left-[0]  top-[10]  translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] min-w-1/2 w-[37rem] h-[27rem] left-[calc(60%-28.5rem)] top-[50%] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] min-w-1/2 w-[37rem] h-[37rem] left-[0]  top-[50%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    final ? /* @__PURE__ */ jsx(
      UserDataForm,
      {
        booking_data,
        selectedRooms,
        setFinal,
        handleSetData,
        errors,
        data,
        submit,
        total,
        promotion,
        processing
      }
    ) : /* @__PURE__ */ jsxs("div", { className: "relative flex gap-2 m-6", children: [
      /* @__PURE__ */ jsx(
        RoomsServces,
        {
          rooms: rooms2,
          services: services2,
          booking_data,
          selectedRooms,
          setSelectedRooms,
          data,
          setData: setData2,
          total,
          setTotal,
          beedsNumber,
          setBeedsNumber,
          promotion
        }
      ),
      /* @__PURE__ */ jsx(
        BookingsCard,
        {
          setFinal,
          booking_data,
          data,
          setData: setData2,
          total,
          setTotal,
          beedsNumber,
          setBeedsNumber,
          selectedRooms,
          setSelectedRooms,
          promotion
        }
      )
    ] })
  ] });
}
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AviableRooms
}, Symbol.toStringTag, { value: "Module" }));
function MyBookings$1({ booking: booking2 }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.myBookings.booking"
  });
  const [processing, setProcessing] = React__default.useState(false);
  const totalPrice = () => {
    let total = 0;
    let days = (new Date(booking2.check_out) - new Date(booking2.check_in)) / (1e3 * 60 * 60 * 24);
    booking2.rooms.map((room) => {
      total += room.pivot.room_price * days;
    });
    booking2.consomation.map((consomation) => {
      total += consomation.consumption_price * consomation.pivot.quantity;
    });
    return total;
  };
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("metaDescreption") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-1/2 h-[47rem] left-[calc(40%-20rem)] top-[30rem] sm:translate-x-[10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title"), className: "my-10 relative" }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col md:flex-row gap-2 m-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-1/3 md:flex-col w-full flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: t("infoCard") }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              booking2.user.first_name,
              " ",
              booking2.user.last_name,
              " "
            ] }),
            /* @__PURE__ */ jsx("div", { children: booking2.user.email }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: booking2.user.phone })
          ] }) }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-end p-2", children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "link",
              disabled: processing,
              onClick: () => router.get(
                route("client.profile.edit"),
                {},
                {
                  onStart: () => {
                    setProcessing(true);
                  },
                  onFinish: () => {
                    setProcessing(false);
                  }
                }
              ),
              children: t("showProfile")
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "font-bold p-2", children: t("bookingDetails") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "flex justify-between p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                t("checkIn"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking2.check_in }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "12h00 - 23h00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { children: [
                t("checkOut"),
                " "
              ] }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: booking2.check_out }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "07h00 - 12h00" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex justify-between p-2", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("guestNumber"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
              booking2.guest_number,
              " "
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: t("adult") }),
            booking2.kids_number ? /* @__PURE__ */ jsxs(Fragment, { children: [
              " ",
              t("and"),
              " ",
              /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                booking2.kids_number,
                " "
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: t("babys") })
            ] }) : null
          ] }) }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col items-start p-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("time"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "font-bold", children: [
              (new Date(booking2.check_out) - new Date(booking2.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              t("nights")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "p-2 font-bold", children: t("pricingCardHeader") }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-2 text-3xl font-bold text-primary", children: [
            totalPrice(booking2.rooms),
            " ",
            t("da")
          ] }),
          /* @__PURE__ */ jsx(CardFooter, { className: "p-2 text-muted-foreground", children: t("pricingCardFooter") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 w-full h-fit bg-card p-2 pb-6 rounded-lg", children: [
        booking2.rooms.map((room) => /* @__PURE__ */ jsxs(Card, { className: "w-full mb-2", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold p-2 pb-0 flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              t("room"),
              " ",
              room.type.type_designation,
              " ",
              t("with"),
              " ",
              room.beeds_number,
              " ",
              t("beeds")
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
              (new Date(booking2.check_out) - new Date(booking2.check_in)) / (1e3 * 60 * 60 * 24),
              " ",
              "x ",
              room.pivot.room_price,
              " ",
              t("da")
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-2 ", children: room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
            Badge,
            {
              className: "m-0 w-autot",
              children: [
                feature.features_name,
                feature.need_value == true && ": " + feature.pivot.valeur
              ]
            },
            feature.feature_id
          )) }),
          /* @__PURE__ */ jsx(CardFooter, { className: "flex-col items-end p-2 pt-0", children: /* @__PURE__ */ jsxs(Dialog, { children: [
            /* @__PURE__ */ jsx(
              DialogTrigger,
              {
                className: buttonVariants({
                  variant: "link"
                }),
                children: t("showMore")
              }
            ),
            /* @__PURE__ */ jsxs(DialogContent, { className: "p-0 mb-10 max-h-screen", children: [
              /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "p-0", children: /* @__PURE__ */ jsxs(Carousel, { children: [
                /* @__PURE__ */ jsx(CarouselContent, { children: room.assets.map(
                  (asset) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: asset.url,
                      alt: asset.name,
                      className: "w-full"
                    }
                  ) })
                ) }),
                /* @__PURE__ */ jsx(CarouselPrevious, {}),
                /* @__PURE__ */ jsx(CarouselNext, {})
              ] }) }) }),
              /* @__PURE__ */ jsxs(DialogDescription, { className: "p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground flex justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    t("room"),
                    " ",
                    room.type.type_designation,
                    " ",
                    t("with"),
                    " ",
                    room.beeds_number,
                    " ",
                    t("beeds")
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                    " ",
                    room.pivot.room_price,
                    " ",
                    t("da")
                  ] })
                ] }),
                room.features.length > 0 && /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                  /* @__PURE__ */ jsx(Separator, {}),
                  /* @__PURE__ */ jsxs("div", { className: "font-bold text-foreground pb-2 flex justify-start", children: [
                    t("features"),
                    " :"
                  ] }),
                  room.features.slice(0, 4).map((feature) => /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      className: "m-0 w-autot",
                      children: [
                        feature.features_name,
                        feature.need_value == true && ": " + feature.pivot.valeur
                      ]
                    },
                    feature.feature_id
                  ))
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
                  /* @__PURE__ */ jsx(Separator, {}),
                  /* @__PURE__ */ jsx(
                    RichEditor,
                    {
                      className: "bg-transparent border-none max-h-[200px] overflow-auto",
                      autofocus: false,
                      editable: false,
                      content: room.room_descreption
                    }
                  )
                ] })
              ] })
            ] })
          ] }) })
        ] }, room.room_number)),
        booking2.consomation.map((consomation) => /* @__PURE__ */ jsx(
          Card,
          {
            className: "w-full mb-2",
            children: /* @__PURE__ */ jsxs(CardHeader, { className: "p-2 font-bold flex flex-row items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { children: consomation.consumption_name }),
              /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
                consomation.pivot.quantity,
                " x",
                " ",
                consomation.consumption_price,
                " ",
                t("da")
              ] })
            ] })
          },
          consomation.consumption_id
        ))
      ] })
    ] })
  ] });
}
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MyBookings$1
}, Symbol.toStringTag, { value: "Module" }));
const mybookingscolumns = [
  {
    accessorKey: "ref",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsx("div", { className: "font-bold text-base", children: booking2.booking_id });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "ref" })
  },
  {
    accessorKey: "rooms",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsx("span", { children: booking2.rooms.length });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "rooms" })
  },
  {
    accessorKey: "dates",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        booking2.check_in,
        " - ",
        booking2.check_out,
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "dates" })
  },
  {
    accessorKey: "bookingDate",
    cell: ({ row }) => {
      const booking2 = row.original;
      return /* @__PURE__ */ jsxs("span", { children: [
        booking2.created_at.split("T")[0],
        " "
      ] });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "bookingDate" })
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const booking2 = row.original;
      return booking2.booking_status == "confirmer" ? /* @__PURE__ */ jsx(Badge, { variant: "success", children: booking2.booking_status }) : booking2.booking_status == "en attente" ? /* @__PURE__ */ jsx(Badge, { variant: "warning", children: booking2.booking_status }) : /* @__PURE__ */ jsx(Badge, { variant: "danger", children: booking2.booking_status });
    },
    header: () => /* @__PURE__ */ jsx(ColumnHeader, { title: "status" })
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking2 = row.original;
      const { width } = useWindowDimensions();
      const [open, setopen] = React__default.useState(false);
      const [isopen, setIsOpen] = React__default.useState(false);
      const [processing, setProcessing] = React__default.useState(false);
      const { t } = useTranslation("translation", {
        keyPrefix: "client.myBookings"
      });
      const handleBookingStatus = () => {
        router.post(
          route("client.bookings.cancel", booking2.booking_id),
          {},
          {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
              setopen(false);
              setIsOpen(false);
            },
            onStart: () => {
              setProcessing(true);
            },
            onFinish: () => {
              setProcessing(false);
            }
          }
        );
      };
      return /* @__PURE__ */ jsxs(
        DropdownMenu,
        {
          open: isopen ? true : open,
          onOpenChange: setopen,
          children: [
            /* @__PURE__ */ jsxs(
              DropdownMenuTrigger,
              {
                className: buttonVariants({
                  variant: "ghost",
                  size: "icon"
                }),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" }),
                  /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
              /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  disabled: processing,
                  onClick: () => router.get(
                    route(
                      "client.bookings.show",
                      booking2.booking_id
                    ),
                    {},
                    {
                      onStart: () => {
                        setProcessing(true);
                      },
                      onFinish: () => {
                        setProcessing(false);
                      }
                    }
                  ),
                  className: "cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      t("show"),
                      " "
                    ] })
                  ]
                }
              ),
              booking2.booking_status == "en attente" || booking2.booking_status == "confirmer" ? /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer flex bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", children: width >= 767 ? /* @__PURE__ */ jsxs(
                Dialog,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsx(DialogTrigger, { className: "w-full", children: t("cancel") }),
                    /* @__PURE__ */ jsxs(DialogContent, { children: [
                      /* @__PURE__ */ jsxs(DialogHeader, { children: [
                        /* @__PURE__ */ jsx(DialogTitle, { children: t("dialogTitle") }),
                        /* @__PURE__ */ jsx(DialogDescription, { children: t("dialogDescreption") })
                      ] }),
                      /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleBookingStatus(),
                            children: t("accept")
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => {
                              setopen(false);
                              setIsOpen(false);
                            },
                            children: t("deni")
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) : /* @__PURE__ */ jsxs(
                Drawer,
                {
                  open: isopen,
                  onOpenChange: setIsOpen,
                  children: [
                    /* @__PURE__ */ jsx(DrawerTrigger, { className: "w-full", children: t("cancel") }),
                    /* @__PURE__ */ jsxs(DrawerContent, { children: [
                      /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
                        /* @__PURE__ */ jsx(DrawerTitle, { children: t("dialogTitle") }),
                        /* @__PURE__ */ jsx(DrawerDescription, { children: t("dialogDescreption") })
                      ] }),
                      /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "destructive",
                            onClick: () => handleBookingStatus(),
                            children: t("accept")
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "secondary",
                            onClick: () => {
                              setopen(false);
                              setIsOpen(false);
                            },
                            children: t("deni")
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) }) : null
            ] })
          ]
        }
      );
    }
  }
];
function MyBookings({ bookings: bookings2 }) {
  const { t } = useTranslation("translation", { keyPrefix: "client.myBookings" });
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("metaDescreption") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title"), className: "my-10 relative" }),
    /* @__PURE__ */ jsx("div", { className: "bg-card p-4 rounded-lg my-4 relative", children: /* @__PURE__ */ jsx(
      DataTable,
      {
        columns: mybookingscolumns,
        data: bookings2.data,
        paginate: bookings2,
        selection: false
      }
    ) })
  ] });
}
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MyBookings
}, Symbol.toStringTag, { value: "Module" }));
function Show$2({ event }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.event"
  });
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("metaDescreption") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(PageHeading, { title: event.event_name, className: "my-10 relative" }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg my-4 relative", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: event.assets.map((asset) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: asset.name,
              className: "rounded-md aspect-video object-cover w-full transition-transform duration-300 hover:scale-95"
            }
          )
        },
        asset.id
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg my-4 relative bg-card ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between itmes-center font-bold", children: [
        event.event_start_date == event.event_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          t("singleDate"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: event.event_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 justify-around mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateStart"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateEnd"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
          event.event_price,
          " ",
          t("da")
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          autofocus: false,
          editable: false,
          content: event.event_descreption
        }
      )
    ] })
  ] });
}
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$2
}, Symbol.toStringTag, { value: "Module" }));
function Promotion({ promotion }) {
  const [processing, setProcessing] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.promotion"
  });
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 md:flex md:flex-row flex-col bg-transparent border-none shadow-none ", children: [
    /* @__PURE__ */ jsx("div", { className: "md:w-1/2 w-full  ", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: promotion.assets[0].url,
        className: "object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between md:w-1/2 w-full ", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "font-bold text-xl flex flex-row items-center justify-end", children: /* @__PURE__ */ jsxs("div", { className: "text-primary text-2xl ", children: [
        t("cardHeader"),
        " ",
        promotion.promo_value,
        " ",
        t("da"),
        " "
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "text-muted-foreground", children: [
        promotion.promo_start_date == promotion.promo_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          t("singleDate"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: promotion.promo_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-around mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateStart"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateEnd"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          RichEditor,
          {
            className: "bg-transparent border-none ",
            autofocus: false,
            editable: false,
            content: promotion.promo_descreption,
            length: 200
          }
        )
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          disabled: processing,
          onClick: () => router.get(
            route(
              "client.promotion.show",
              promotion.promotion_id
            ),
            {},
            {
              onStart: () => {
                setProcessing(true);
              },
              onFinish: () => {
                setProcessing(false);
              }
            }
          ),
          children: t("actionBtn")
        }
      ) })
    ] })
  ] });
}
function Events({ event }) {
  const [processing, setProcessing] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.event"
  });
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 sm:flex sm:flex-row-reverse flex-col-reverse bg-transparent border-none shadow-none ", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: event.assets[0].url,
        alt: `Selected ${event.assets[0].id}`,
        className: "object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between sm:w-1/2 w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "font-bold text-xl flex flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: event.event_name }),
        /* @__PURE__ */ jsxs("div", { className: "text-primary text-2xl font-bold", children: [
          event.event_price,
          " ",
          t("da"),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "text-muted-foreground flex-grow", children: [
        event.event_start_date == event.event_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          t("singleDate"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateStart"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateEnd"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: event.event_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          RichEditor,
          {
            className: "bg-transparent border-none ",
            autofocus: false,
            editable: false,
            content: event.event_descreption,
            length: 200
          }
        )
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-start z-[1]", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          disabled: processing,
          onClick: () => router.get(
            route("client.event.show", event.event_id),
            {},
            {
              onStart: () => {
                setProcessing(true);
              },
              onFinish: () => {
                setProcessing(false);
              }
            }
          ),
          children: t("actionBtn")
        }
      ) })
    ] })
  ] });
}
function RoomCard({ room }) {
  var _a, _b;
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.rooms.roomCard"
  });
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 w-full sm:flex sm:flex-row flex-col bg-transparent border-none shadow-none", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: (_a = room.assets[0]) == null ? void 0 : _a.url,
        alt: `Selected ${(_b = room.assets[0]) == null ? void 0 : _b.name}`,
        className: "object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between sm:w-1/2 w-full", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold text-xl uppercase", children: room.type_designation }),
        /* @__PURE__ */ jsxs("div", { className: "text-primary text-3xl font-bold ", children: [
          room.room_price,
          " ",
          t("da"),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
          t("features"),
          " :"
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { className: "flex gap-2 flex-wrap", children: room.features.map((feature) => /* @__PURE__ */ jsxs(
          Badge,
          {
            className: "m-0 w-autot",
            children: [
              feature.features_name,
              feature.need_value == true && ": " + feature.pivot.valeur
            ]
          },
          feature.feature_id
        )) })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-end", children: /* @__PURE__ */ jsx("a", { href: "#booking-form", children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", children: [
        t("actionBtn"),
        " "
      ] }) }) })
    ] })
  ] });
}
function Rooms({ rooms: rooms2 }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.rooms"
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex flex-col justify-center items-center min-h-screen max-h-sceen",
      id: "rooms-section",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute w-1/2 sm:w-11/12 h-1/2 rotate-12 top-1/3 rounded-t-full z-[0] inset-0 bg-gradient-to-r from-secondarybg from-10% via-secondarybg via-30% to-secondarybg to-0% blur-2xl opacity-70" }),
        /* @__PURE__ */ jsx("div", { className: "font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: t("title") }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: t("descreption") }) }),
        /* @__PURE__ */ jsxs(
          Tabs,
          {
            defaultValue: rooms2[0].room_number,
            className: "w-full flex flex-col",
            children: [
              /* @__PURE__ */ jsxs(ScrollArea, { className: "w-full ", children: [
                /* @__PURE__ */ jsx(TabsList, { className: "flex justify-center bg-transparent h-fit", children: rooms2.map((room) => /* @__PURE__ */ jsxs(
                  TabsTrigger,
                  {
                    value: room.room_number,
                    className: "flex-col w-fit text-foreground items-start border border-input bg-background px-6 mx-4 rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:border-primary",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold uppercase ", children: room.type_designation }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                        room.rooms_count,
                        " ",
                        t("tabTrigger")
                      ] })
                    ]
                  },
                  room.room_number
                )) }),
                /* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" })
              ] }),
              rooms2.map((room) => /* @__PURE__ */ jsxs(
                TabsContent,
                {
                  value: room.room_number,
                  children: [
                    /* @__PURE__ */ jsx(RoomCard, { room }),
                    " "
                  ]
                },
                room.room_number
              ))
            ]
          }
        )
      ]
    }
  );
}
function ServiceCard({ service }) {
  var _a, _b;
  const [processing, setProcessing] = React__default.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.services"
  });
  return /* @__PURE__ */ jsxs(Card, { className: "relative my-6 p-4 sm:flex sm:flex-row-reverse flex-col-reverse bg-transparent border-none shadow-none", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: (_a = service.assets[0]) == null ? void 0 : _a.url,
        alt: `${(_b = service.assets[0]) == null ? void 0 : _b.name}`,
        className: "object-cover w-full min-h-fit rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between sm:w-1/2 w-full", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "flex-row items-center justify-start", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-xl uppercase", children: service.service_name }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "flex gap-2 flex-wrap", children: /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          classNames: {
            content: "text-ellipsis overflow-hidden ... "
          },
          autofocus: false,
          editable: false,
          content: service.service_descreption,
          length: 200
        }
      ) }) }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-start", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          size: "sm",
          disabled: processing,
          onClick: () => router.get(
            route(
              "client.service.show",
              service.service_id
            ),
            {},
            {
              onStart: () => {
                setProcessing(true);
              },
              onFinish: () => {
                setProcessing(false);
              }
            }
          ),
          children: t("actionBtn")
        }
      ) })
    ] })
  ] });
}
function Services({ services: services2 }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.services"
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex flex-col justify-center items-center min-h-screen max-h-sceen",
      id: "services-section",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute w-3/4 h-1/2 -rotate-12 top-40 rounded-full z-[0] inset-0 bg-gradient-to-r from-primarybg from-10% via-primarybg via-30% to-primarybg to-0% blur-2xl opacity-70" }),
        /* @__PURE__ */ jsx("div", { className: "font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: t("title") }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: t("description") }) }),
        /* @__PURE__ */ jsxs(
          Tabs,
          {
            defaultValue: services2[0].service_id,
            className: "w-full flex flex-col",
            children: [
              /* @__PURE__ */ jsxs(ScrollArea, { className: "w-full ", children: [
                /* @__PURE__ */ jsx(TabsList, { className: "flex justify-center bg-transparent h-fit", children: services2.map((service) => /* @__PURE__ */ jsx(
                  TabsTrigger,
                  {
                    value: service.service_id,
                    className: "flex-col uppercase font-bold w-fit text-foreground items-start border border-input bg-background px-6 mx-4 rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:border-primary",
                    children: service.service_name
                  },
                  service.service_id
                )) }),
                /* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" })
              ] }),
              services2.map((service) => /* @__PURE__ */ jsx(
                TabsContent,
                {
                  value: service.service_id,
                  children: /* @__PURE__ */ jsx(ServiceCard, { service })
                },
                service.service_id
              ))
            ]
          }
        )
      ]
    }
  );
}
function BookingForm({ id }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.banner.form"
  });
  const { data, setData: setData2, get, processing, errors } = useForm({
    check_in: "",
    check_out: "",
    guest_number: 0,
    kids_number: 0
  });
  console.log(errors);
  const [dateRange, setDateRange] = useState({
    from: "",
    to: ""
  });
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const handleDateChange = (range) => {
    if (range == null ? void 0 : range.from) {
      const formattedDate = formatDate(range.from);
      setData2("check_in", formattedDate);
    }
    if (range == null ? void 0 : range.to) {
      const formattedDate = formatDate(range.to);
      setData2("check_out", formattedDate);
    }
    setDateRange(range);
  };
  const incriment = (value) => {
    if (value == "guest_number") {
      setData2("guest_number", data.guest_number + 1);
    } else {
      setData2("kids_number", data.kids_number + 1);
    }
  };
  const dicriment = (value) => {
    if (value == "guest_number") {
      if (data.guest_number > 0) {
        setData2("guest_number", data.guest_number - 1);
      }
    } else {
      if (data.kids_number > 0) {
        setData2("kids_number", data.kids_number - 1);
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    get(route("client.booking.search"));
  };
  return /* @__PURE__ */ jsx("div", { className: "relative z-[10] md:px-4 pb-6", children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: submit,
      className: "flex items-center md:items-end justify-between gap-2 flex-col md:flex-row",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-2/3 md:w-1/4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              value: t("date"),
              htmlFor: "dates",
              className: "mb-3"
            }
          ),
          /* @__PURE__ */ jsx(
            DatePickerWithRange,
            {
              date: dateRange,
              onDateChange: handleDateChange,
              min: 2
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-2/3 md:w-1/4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "guest_number",
              value: t("guestNumber"),
              className: "mb-3"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border rounded-md p-1 bg-card", children: [
            /* @__PURE__ */ jsx(
              CircleMinus,
              {
                onClick: () => dicriment("guest_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            ),
            /* @__PURE__ */ jsxs("span", { children: [
              data.guest_number,
              " "
            ] }),
            /* @__PURE__ */ jsx(
              CirclePlus,
              {
                onClick: () => incriment("guest_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-2/3 md:w-1/4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "kids_number",
              value: t("kidsNumber"),
              className: "mb-3"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border rounded-md p-1 bg-card", children: [
            /* @__PURE__ */ jsx(
              CircleMinus,
              {
                onClick: () => dicriment("kids_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            ),
            /* @__PURE__ */ jsxs("span", { children: [
              data.kids_number,
              " "
            ] }),
            /* @__PURE__ */ jsx(
              CirclePlus,
              {
                onClick: () => incriment("kids_number"),
                className: "cursor-pointer hover:text-secondary"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "sm",
            className: "md:w-1/12 sm:w-1/6 w-1/4",
            disabled: processing,
            children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : t("search")
          }
        )
      ]
    }
  ) });
}
function HomeHeading({ id }) {
  const { width } = useWindowDimensions();
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.banner"
  });
  return /* @__PURE__ */ jsxs("div", { id, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-full z-10 p-4 flex md:flex-row flex-col justify-around", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center md:w-1/2 w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-1.5 p-6", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-5xl py-4", children: t("title") }) }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground  text-sm md:text-base p-6 pt-0", children: /* @__PURE__ */ jsx("div", { children: t("descreption") }) })
      ] }),
      width <= 767 && /* @__PURE__ */ jsx(BookingForm, {}),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/assets/sidi-el-noui-logo-removebg.png",
          className: "object-content w-1/3 md:w-2/3 rounded-xl relative z-10  hover:corsur-pointer  transition-transform duration-300 hover:scale-105 "
        }
      ) })
    ] }),
    width > 767 && /* @__PURE__ */ jsx(BookingForm, {})
  ] });
}
function Contact() {
  const user = usePage().props.auth.user;
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.contact"
  });
  const { data, setData: setData2, errors, post, reset, processing, clearErrors } = useForm({
    client_email: user ? user.email : "",
    subject: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("client.contact.store"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("client_email", "message", "subject");
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex flex-col justify-center items-center min-h-screen max-h-sceen",
      id: "contact-section",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.4)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
        /* @__PURE__ */ jsx("div", { className: "font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: t("title") }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "relative w-full px-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 flex-col-reverse sm:flex-row", children: [
            /* @__PURE__ */ jsxs("div", { className: "sm:w-1/3 w-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "my-4 flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    value: t("email"),
                    htmlFor: "client_email"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "email",
                    id: "client_email",
                    name: "client_email",
                    placeholder: t("email"),
                    value: data.client_email,
                    disabled: user,
                    onChange: (e) => {
                      setData2("client_email", e.target.value);
                      clearErrors("client_email");
                    },
                    className: "bg-card "
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.client_email })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-4 flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    value: t("subject"),
                    htmlFor: "subject"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    id: "subject",
                    name: "subject",
                    placeholder: t("subject"),
                    value: data.subject,
                    onChange: (e) => {
                      setData2("subject", e.target.value);
                      clearErrors("subject");
                    },
                    className: "bg-card "
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.subject })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "sm:w-2/3 my-8 text-muted-foreground ", children: t("description") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(InputLabel, { value: t("message"), htmlFor: "message" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "message",
                name: "message",
                placeholder: t("message"),
                value: data.message,
                onChange: (e) => {
                  setData2("message", e.target.value);
                  clearErrors("message");
                },
                className: "bg-card h-40"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.message })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", className: "w-1/6", children: processing ? /* @__PURE__ */ jsx(LoaderCircle, { className: "animate-spin" }) : t("submit") }) })
        ] })
      ]
    }
  );
}
function Home({ events: events2, promotions: promotions2, rooms: rooms2, services: services2 }) {
  const { toast: toast2 } = useToast();
  const { t } = useTranslation("translation", { keyPrefix: "client.home" });
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("metaDescreption") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative h-dvh f ", id: "home-section", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute size-1/2 translate-x-full rounded-full z-[0] inset-0 bg-gradient-to-r from-primarybg from-10% via-primarybg via-30% to-primarybg to-90% blur-2xl opacity-70" }),
      /* @__PURE__ */ jsx(HomeHeading, { id: "booking-form" })
    ] }),
    promotions2 && /* @__PURE__ */ jsxs("div", { className: "my-6 relative min-h-screen max-h-sceen", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute w-3/4 h-1/2 sm:rotate-45 top-20 rounded-full z-[0] inset-0 bg-gradient-to-r from-secondarybg from-10% via-secondarybg via-30% to-secondarybg to-90% blur-2xl opacity-70" }),
      /* @__PURE__ */ jsx("div", { className: "font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: t("promotions") }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: t("promotionsDescreption") }) }),
      /* @__PURE__ */ jsx(Promotion, { promotion: promotions2 })
    ] }),
    events2 && /* @__PURE__ */ jsxs("div", { className: "my-6 relative min-h-screen max-h-sceen", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute w-3/4 h-1/2 -rotate-12 top-20 rounded-full z-[0] inset-0 bg-gradient-to-r from-secondarybg from-10% via-secondarybg via-30% to-primarybg to-0% blur-2xl opacity-70" }),
      /* @__PURE__ */ jsx("div", { className: "font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ", children: t("events") }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground p-6 sm:w-2/3  text-center", children: t("eventsDescreption") }) }),
      /* @__PURE__ */ jsx(Events, { event: events2 })
    ] }),
    rooms2.length > 0 && /* @__PURE__ */ jsx(Rooms, { rooms: rooms2 }),
    services2.length > 0 && /* @__PURE__ */ jsx(Services, { services: services2 }),
    /* @__PURE__ */ jsx(Contact, { rooms: rooms2 })
  ] });
}
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function DeleteUserForm({ className = "" }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "client.profile.section3"
  });
  const passwordInput = useRef();
  const { width } = useWindowDimensions();
  const {
    data,
    setData: setData2,
    delete: destroy,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("client.profile.destroy"), {
      preserveScroll: true,
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t("title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: t("subtitle") })
    ] }),
    width >= 767 ? /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DialogTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            t("title")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsxs(DialogTitle, { children: [
            t("dialogTitle"),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DialogDescription, { children: [
            t("dialogDescreption"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1 ",
                isFocused: true,
                placeholder: t("placeholder")
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DialogFooter, { className: "gap-2 ", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setOpen(false),
                children: t("cancel")
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  t("delete")
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Drawer, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxs(
        DrawerTrigger,
        {
          className: buttonVariants({ variant: "destructive" }),
          children: [
            /* @__PURE__ */ jsx(Trash, { className: "mr-2 h-3.5 w-3.5 " }),
            t("title")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(DrawerContent, { children: [
        /* @__PURE__ */ jsxs(DrawerHeader, { className: "text-left", children: [
          /* @__PURE__ */ jsxs(DrawerTitle, { children: [
            t("dialogTitle"),
            " "
          ] }),
          /* @__PURE__ */ jsxs(DrawerDescription, { children: [
            t("dialogDescreption"),
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 px-4", children: [
            /* @__PURE__ */ jsx(
              InputLabel,
              {
                htmlFor: "password",
                value: "Password",
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData2("password", e.target.value),
                className: "mt-1",
                isFocused: true,
                placeholder: t("placeholder")
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(DrawerFooter, { className: "pt-2", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                onClick: () => {
                  deleteUser();
                },
                className: "flex justify-center",
                children: [
                  /* @__PURE__ */ jsx(Trash, { className: "mx-2 h-3.5 w-3.5" }),
                  t("delete")
                ]
              }
            ),
            /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: t("cancel") }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const {
    data,
    setData: setData2,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful,
    clearErrors
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const { t } = useTranslation("translation", {
    keyPrefix: "client.profile.section2"
  });
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t("title") }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: t("subtitle") })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, children: [
      /* @__PURE__ */ jsx("div", { className: "md:flex my-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full  bg-muted p-4 shadow", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "current_password",
            value: t("password")
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "mt-2 w-full bg-card",
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => {
              setData2("current_password", e.target.value);
              clearErrors("current_password");
            },
            type: "password",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.current_password,
            className: "mt-2"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password",
              value: t("newPassword")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password",
              ref: passwordInput,
              value: data.password,
              onChange: (e) => {
                setData2("password", e.target.value);
                clearErrors("password");
              },
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password_confirmation",
              value: t("confirmPassword")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "password_confirmation",
              value: data.password_confirmation,
              onChange: (e) => {
                setData2(
                  "password_confirmation",
                  e.target.value
                );
                clearErrors("password_confirmation");
              },
              type: "password",
              autoComplete: "new-password"
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password_confirmation,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: processing,
            type: "submit",
            className: "mt-2 w-1/4",
            variant: "secondary",
            children: t("submit")
          }
        ) }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: t("submit") })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = ""
}) {
  const user = usePage().props.auth.user;
  const { t } = useTranslation("translation", {
    keyPrefix: "client.profile.section1"
  });
  const { data, setData: setData2, patch, errors, processing, clearErrors } = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("client.profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: t("title") }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "first_name",
              value: t("firstName")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "first_name",
              value: data.first_name,
              onChange: (e) => {
                setData2("first_name", e.target.value);
                clearErrors("first_name");
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.first_name,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "md:hidden my-4" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "last_name",
              value: t("lastName")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "last_name",
              value: data.last_name,
              onChange: (e) => {
                setData2("last_name", e.target.value);
                clearErrors("last_name");
              }
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.last_name,
              className: "mt-2"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("email") }),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("emailDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: t("email") }),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "email",
              value: data.email,
              onChange: (e) => {
                setData2("email", e.target.value);
                clearErrors("email");
              }
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs("div", { className: "md:flex my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 pb-2", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: t("phone")
            }
          ),
          /* @__PURE__ */ jsx(LabelDescreption, { children: t("phoneDescreption") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 bg-muted p-4 shadow", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "phone",
              value: t("phone")
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: "mt-2 w-full bg-card",
              id: "phone",
              value: data.phone,
              onChange: (e) => {
                setData2("phone", e.target.value);
                clearErrors("phone");
              }
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.phone, className: "mt-2" })
        ] })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800 dark:text-gray-200", children: [
          t("emailValidation"),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
              children: [
                t("sendEmailVAlidation"),
                " "
              ]
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400", children: t("validationSended") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Button,
        {
          disabled: processing,
          type: "submit",
          className: "mt-2 w-1/4",
          variant: "secondary",
          children: t("submit")
        }
      ) })
    ] })
  ] });
}
const __vite_glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ mustVerifyEmail, status }) {
  const { toast: toast2 } = useToast();
  const flash = usePage().props.flash;
  const { t } = useTranslation("translation", {
    keyPrefix: "client.profile"
  });
  useEffect(() => {
    var _a;
    if (flash.message) {
      toast2({ description: (_a = flash.message) == null ? void 0 : _a.message });
    }
  }, [flash.message, toast2]);
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("title") }),
    /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
        UpdateProfileInformation,
        {
          mustVerifyEmail,
          status
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, {}) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
    ] }) })
  ] });
}
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Show$1({ promotion }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.promotion"
  });
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("metaDescription") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(PageHeading, { title: t("title"), className: "my-10 relative" }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg my-4 relative", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: promotion == null ? void 0 : promotion.assets.map((asset) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: asset.name,
              className: "rounded-md aspect-video object-cover w-full transition-transform duration-300 hover:scale-95"
            }
          )
        },
        asset.id
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg my-4 relative bg-card ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between itmes-center font-bold", children: [
        promotion.promo_start_date == promotion.promo_end_date ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          t("singleDate"),
          " :",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: promotion.promo_start_date })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 justify-around mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateStart"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_start_date })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            t("multipleDateEnd"),
            " :",
            " ",
            /* @__PURE__ */ jsx("span", { className: " text-lg", children: promotion.promo_end_date })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xl text-primary", children: [
          "- ",
          promotion.promo_value,
          " DA"
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          autofocus: false,
          editable: false,
          content: promotion.promo_descreption
        }
      )
    ] })
  ] });
}
const __vite_glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
function Show({ service }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "client.sections.services"
  });
  return /* @__PURE__ */ jsxs(ClientLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("metaDescreption") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]" }),
    /* @__PURE__ */ jsx(
      PageHeading,
      {
        title: service.service_name,
        className: "my-10 relative"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg my-4 relative", children: /* @__PURE__ */ jsxs(Carousel, { children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: service.assets.map((asset) => /* @__PURE__ */ jsx(
        CarouselItem,
        {
          className: "md:basis-1/2 lg:basis-1/3",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: asset.url,
              alt: asset.name,
              className: "rounded-md aspect-video object-cover w-full transition-transform duration-300 hover:scale-95"
            }
          )
        },
        asset.id
      )) }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg my-4 relative bg-card", children: [
      /* @__PURE__ */ jsx(
        RichEditor,
        {
          className: "bg-transparent border-none",
          autofocus: false,
          editable: false,
          content: service.service_descreption
        }
      ),
      service.consomation.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold", children: t("consumptions") }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 my-2", children: service.consomation.map((consomation) => /* @__PURE__ */ jsx(
          Badge,
          {
            className: "m-0 w-autot",
            children: consomation.consumption_name
          },
          consomation.consumption_id
        )) })
      ] })
    ] })
  ] });
}
const __vite_glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
function Error$1({ status }) {
  const title = {
    503: "503: Service Unavailable",
    500: "500: Server Error",
    404: "404: Page Not Found",
    403: "403: Forbidden"
  }[status];
  const description = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page."
  }[status];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center h-screen w-full gap-2", children: [
    /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "430",
        height: "430",
        fill: "none",
        viewBox: "0 0 430 430",
        children: /* @__PURE__ */ jsxs(
          "g",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            strokeWidth: "12",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "#203d51",
                  d: "m226.4 88.5 139 240.8c5 8.7-1.3 19.5-11.3 19.5h-278c-10 0-16.3-10.9-11.3-19.5l139-240.8c5-8.7 17.5-8.7 22.6 0"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "#e9c05b",
                  d: "M217.8 259h-5.4c-7.4 0-13.5-5.8-13.8-13.2l-2.8-57.9c-.5-9.4 7-17.2 16.4-17.2h6c9.4 0 16.8 7.8 16.4 17.2l-2.8 57.9c-.6 7.4-6.6 13.2-14 13.2m-2.7 57.8c8.782 0 15.9-7.119 15.9-15.9s-7.118-15.9-15.9-15.9-15.9 7.119-15.9 15.9 7.119 15.9 15.9 15.9"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "font-bold text-xl", children: title }),
    /* @__PURE__ */ jsx("div", { className: "font-bold text-xl", children: description }),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        size: "sm",
        className: "mt-3",
        onClick: () => router.get(route("client.index")),
        children: "Retournez vers la page d'accueil"
      }
    )
  ] });
}
const __vite_glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Error$1
}, Symbol.toStringTag, { value: "Module" }));
const layout$1 = {
  navBar: {
    addBooking: "إضافة حجز",
    themeTolip: "تغيير السمة",
    dialog: {
      dialogTitle: "إضافة حجز",
      dialogDescreption: "البحث عن الغرف المتاحة",
      form: {
        dates: "تاريخ بداية ونهاية الحجز",
        guestNumber: "عدد الأشخاص",
        needValue: "اختر هذا الخيار إذا كان الحجز لشركة",
        submit: "بحث"
      }
    },
    notifications: {
      tolip: "الإشعارات",
      "new": "حجز جديد",
      all: "كل الإشعارات"
    },
    userNav: {
      tolip: "الملف الشخصي",
      dashboard: "لوحات المعلومات",
      inbox: "علبة الوارد",
      account: "الحساب",
      logout: "تسجيل الخروج"
    }
  },
  sideBar: {
    dashboard: "لوحات المعلومات",
    bookingsGroupe: "محرك الحجز",
    bookings: "الحجوزات",
    historical: "السجل",
    rooms: "الغرف",
    owner: "المالك",
    allRooms: "كل الغرف",
    features: "الميزات",
    services: "الخدمات",
    allServices: "كل الخدمات",
    consumption: "الاستهلاكات",
    bills: "الفواتير",
    events: "الفعاليات",
    promotions: "العروض الترويجية",
    managment: "الإدارة",
    users: "المستخدمين",
    roles: "الأدوار",
    employs: "الموظفين"
  },
  notif: "قام بحجز جديد"
};
const auth$1 = {
  auth: "Email ou N° téléphone",
  password: "Mot de passe",
  remember: "Souviens moi",
  forget: "Mot de passe oublié ?",
  submit: "Se Connecter",
  confirmPassword: "هذه منطقة آمنة للتطبيق. يرجى تأكيد كلمة المرور الخاصة بك قبل الاستمرار."
};
const components$1 = {
  datePicker: {
    title: "اختر تاريخًا"
  },
  dataTable: {
    viewOption: {
      tolip: "التحكم في ظهور الأعمدة",
      show: "عرض",
      title: "تبديل الأعمدة",
      selection: "صف(وف) محدد.",
      client: "العميل",
      checkIn: "تسجيل الوصول",
      checkOut: "تسجيل المغادرة",
      bookingDate: "تاريخ الحجز",
      status: "الحالة",
      roomNumber: "رقم الغرفة",
      type: "النوع",
      price: "السعر",
      featureName: "اسم الميزة",
      needValue: "يتطلب قيمة",
      categorie: "الفئة",
      billNumber: "رقم الفاتورة",
      email: "البريد الإلكتروني",
      date: "التاريخ",
      role: "الدور",
      permissions: "الأذونات",
      utilisateurs: "المستخدمين",
      phone: "رقم الهاتف",
      createdAtDate: "تاريخ التسجيل",
      ref: "Ref",
      rooms: "الغرف المحجوزة",
      dates: "تاريخ الدخول / الخروج"
    },
    pagination: {
      footer: "صف(وف) معروض"
    },
    header: {
      up: "تصاعدي",
      down: "تنازلي",
      hide: "إخفاء"
    }
  },
  fileUploader: "تحميل أو إسقاط الصور هنا"
};
const dashboard$1 = {
  title: "لوحات المعلومات",
  dataChart1: "تسجيلات الدخول اليوم",
  dataChart2: "تسجيلات الخروج اليوم",
  dataChart3: "حجوزات اليوم",
  dataChart4: "حجوزات الشهر",
  dataChartFooter1: "من اليوم الأخير",
  dataChartFooter2: "من الشهر الأخير",
  chartTitle: "أنواع الغرف الأكثر حجزاً في الشهر الماضي",
  chartSubTitle: "وتشمل هذه الإحصائيات الحجوزات الملغاة والمرفوضة",
  chartLabel: "الحجوزات"
};
const notifications$1 = {
  title: "الإشعارات",
  readAll: "وضع الكل كمقروء",
  deleteAll: "حذف الكل",
  text1: "قام بحجز",
  text2: "إلى"
};
const messages$1 = {
  title: "علبة الوارد",
  readAll: "وضع الكل كمقروء",
  deleteAll: "حذف الكل",
  all: "الكل",
  unread: "غير مقروء",
  user: "المستخدم",
  replyToMail: "الرد باستخدام بريدك الإلكتروني",
  "delete": "حذف",
  noMessage: "لا توجد رسائل للعرض",
  subject: "الموضوع",
  replyTo: "الرد على:",
  message: "الرسالة",
  placeholder: "الرد على العميل",
  submit: "إرسال"
};
const profile$1 = {
  section1: {
    title: "المعلومات الشخصية",
    form: {
      firstName: "الاسم الأول",
      lastName: "اللقب",
      email: "البريد الإلكتروني",
      emailDescreption: "يجب أن يكون البريد الإلكتروني فريدًا لكل مستخدم",
      phone: "رقم هاتف الموظف",
      phoneDescreption: "يجب أن يكون رقم الهاتف فريدًا لكل مستخدم",
      emailValidation: "عنوان بريدك الإلكتروني غير مُحقق.",
      sendEmailValidation: "انقر هنا لإعادة إرسال بريد التحقق.",
      validationSended: "تم إرسال رابط تحقق جديد إلى عنوان بريدك الإلكتروني.",
      submit: "حفظ"
    }
  },
  section2: {
    title: "تحديث كلمة المرور",
    subtitle: "تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية للحفاظ على الأمان",
    form: {
      password: "كلمة المرور الحالية",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      submit: "حفظ"
    }
  },
  section3: {
    title: "حذف الحساب",
    subtitle: "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته نهائيًا. قبل حذف حسابك، يرجى تنزيل جميع البيانات أو المعلومات التي ترغب في الاحتفاظ بها.",
    submit: "حذف الحساب",
    dialogTitle: "هل أنت متأكد أنك تريد حذف حسابك؟",
    dialogDescreption: "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته نهائيًا. يرجى إدخال كلمة المرور الخاصة بك لتأكيد أنك تريد حذف حسابك نهائيًا.",
    placeholder: "كلمة المرور",
    cancel: "إلغاء",
    "delete": "حذف"
  }
};
const bookings$1 = {
  title: "الحجوزات",
  toastMessage: "إعدادات الفاتورة",
  emptyPage: "لا توجد حجوزات حاليًا، جرب إنشاء حجز جديد",
  historicalTitle: "السجل",
  tableHeader: {
    client: "العميل",
    checkIn: "تسجيل الدخول",
    checkOut: "تسجيل الخروج",
    bookingDate: "تاريخ الحجز",
    status: "الحالة",
    bill: "الفاتورة",
    show: "عرض",
    dialogTitle: "طريقة الدفع",
    dialogDescreption: "اختر طريقة الدفع لهذه الفاتورة",
    opt1: "نقدًا",
    opt2: "شيك",
    approve: "تأكيد",
    cancel: "رفض"
  }
};
const booking$1 = {
  title: "الحجز",
  pageHeading: "حجز لـ ",
  clientCard: "معلومات العميل",
  bookingCard: "تفاصيل الحجز",
  checkIn: "الوصول",
  checkOut: "المغادرة",
  guestNumber: "عدد الأشخاص",
  adult: "بالغ",
  and: "و",
  babys: "رضع",
  nights: "ليلة",
  pricingCard: "ملخص التكلفة",
  pricingFooter: "هذا السعر يشمل جميع الضرائب",
  da: "دج",
  rooms: "غرفة",
  "with": "مع",
  beeds: "أسرة",
  showMore: "عرض المزيد",
  features: "المميزات"
};
const aviableRooms$1 = {
  title: "الغرف المتاحة",
  metaDescreption: "اكتشف الغرف المتاحة في فندق سيدي النوي وقم بإجراء حجزك ببضع نقرات.",
  name: "الاسم",
  adress: "العنوان",
  lastName: "اللقب",
  nif: "رقم التعريف الضريبي",
  nis: "رقم التعريف الإحصائي",
  nrc: "رقم السجل التجاري",
  na: "رقم المقال",
  email: "البريد الإلكتروني",
  emailDescreption: "يجب أن يكون البريد الإلكتروني فريدًا لكل مستخدم",
  phone: "رقم الهاتف",
  phoneDescreption: "يجب أن يكون رقم الهاتف فريدًا لكل مستخدم",
  tableHeader: "اختر غرفة أو أكثر للحجز",
  roomNumber: "رقم الغرفة",
  type: "نوع الغرفة",
  ttc: "السعر شامل جميع الضرائب",
  features: "المميزات",
  roomCode: "غرفة رقم",
  da: "دج",
  cunsumptionHeader: "إضافة استهلاك لهذه الحجز",
  submit: "احجز"
};
const rooms$1 = {
  title: "الغرف",
  createTitle: "إنشاء غرفة",
  editTitle: "تعديل غرفة",
  show: "عرض",
  edit: "تعديل",
  aviable: "تم تحديدها كمتاحة",
  inaviable: "تم تحديدها كغير متاحة",
  topButton: "إنشاء غرفة",
  emptyText: "لا توجد غرف حالياً، حاول إنشاء غرفة جديدة",
  roomNumber: "الغرفة رقم",
  price: "سعر الغرفة",
  da: "دج",
  roomForm: {
    roomNumber: "رقم الغرفة",
    roomNumberDescreption: "ما هو الرقم الفريد لهذه الغرفة؟",
    price: "سعر الغرفة",
    priceDescreption: "هذه هي أسعار الغرفة مع جميع الضرائب شاملًا",
    beedsNumber: "عدد الأسرّة",
    beedsNumberDescreption: "كم عدد الأسرّة في هذه الغرفة؟",
    type: "النوع",
    typeDescreption: "ما هو نوع هذه الغرفة؟",
    typeSelect: "اختر نوعًا...",
    typeSearch: "ابحث عن نوع...",
    emptyTypeMessage: "لا يوجد هذا النوع",
    emptyTypeButton: "إضافة نوع جديد",
    descreption: "الوصف",
    descreptionDescreption: "أدخل وصفًا عامًا لهذه الغرفة",
    features: "المميزات",
    featuresDescreption: "اختر من بين هذه المميزات، وأضف قيمًا للمميزات التي تحتاج لذلك",
    assets: "الصور",
    assetsDescreption: "أضف صورًا للغرف (لا تتجاوز 10 صور لكل غرفة)",
    fileUploader: "تحميل أو إلقاء الصور هنا",
    submit: "إنشاء",
    edit: "حفظ"
  },
  room: {
    title: "الغرفة رقم:",
    "with": "مع",
    beeds: "أسرة",
    price: "سعر الغرفة",
    da: "دج",
    description: "الوصف",
    edit: "تعديل"
  }
};
const features$1 = {
  title: "المميزات",
  categorie: "الفئات",
  emptyFeatures: "لا توجد مميزات حالياً، حاول إنشاء ميزة جديدة",
  emptyCategories: "لا توجد فئات حالياً، حاول إنشاء فئة جديدة",
  form: {
    create: "إنشاء ميزة",
    dialogHeader: "إضافة ميزة جديدة",
    name: "اسم الميزة",
    categorie: "الفئات",
    placeholder: "مثال: واي فاي، الأبعاد",
    selectInput: "اختر فئة...",
    searchInput: "ابحث عن فئة...",
    add: "إضافة",
    add2: "إلى الفئة",
    needValue: "يحتاج إلى قيمة",
    createSubmit: "إنشاء",
    cancel: "إلغاء",
    edit: "تعديل",
    editHeader: "تعديل هذه الميزة",
    save: "حفظ",
    "delete": "حذف",
    deleteHeader: "هل أنت متأكد؟",
    deleteDescreption: "هذه العملية لا يمكن التراجع عنها. سيتم حذف هذه الميزة بشكل دائم وكل غرفة تحتوي على هذه الميزة ستفقدها.",
    addCategorie: "إضافة فئة",
    addCategorieHeader: "إضافة فئة جديدة",
    editCategorietHeader: "تعديل هذه الفئة",
    categorieName: "اسم الفئة:",
    categoriePlaceholder: "مثال: عام، إنترنت",
    deleteCategorieDescreption: "هذه العملية لا يمكن التراجع عنها. سيتم حذف هذا العنصر بشكل دائم وكل ميزة تتعلق بهذه الفئة سيتم حذفها."
  }
};
const services$1 = {
  title: "الخدمات",
  createBtn: "إنشاء خدمة",
  emptyServices: "لا توجد خدمات حالياً، حاول إنشاء خدمة جديدة",
  listHeader: "قائمة الخدمات",
  card: {
    aviable: "متاح",
    inaviable: "غير متاح",
    descreption: "الوصف",
    toggleOff: "تم وضعه خارج الخدمة",
    toggleOn: "تم وضعه في الخدمة",
    editBtn: "تعديل",
    deleteServiceDescreption: "هذه العملية لا يمكن التراجع عنها. سيتم حذف هذا العنصر بشكل دائم وكل استهلاك متعلق بهذه الخدمة سيتم حذفه."
  },
  form: {
    createTitle: "إنشاء خدمة",
    editTitle: "تعديل خدمة",
    name: "اسم الخدمة",
    nameDescreption: "أدخل اسم واضح وبسيط للخدمة",
    placeholder: "مثال: مطعم",
    descreption: "الوصف",
    descreptionDescreption: "يمكنك إضافة عناوين أو تنسيق النص في الوصف",
    assets: "الصور",
    assetsDescreption: "إضافة صور للخدمة (لا تتجاوز 10 صور لكل خدمة)",
    createBtn: "إنشاء",
    editBtn: "حفظ"
  }
};
const consumptions$1 = {
  title: "الاستهلاكات",
  emptyConsumptions: "لا توجد استهلاكات حالياً، حاول إنشاء استهلاك جديد",
  listHeader: "قائمة الاستهلاكات",
  card: {
    price: "السعر الوحدة:",
    da: "دج",
    deleteConsumptionDescreption: "هذه العملية لا يمكن التراجع عنها. سيتم حذف هذا الاستهلاك بشكل دائم"
  },
  form: {
    createBtn: "إنشاء استهلاك",
    editBtn: "تعديل",
    createDialogTitle: "إنشاء استهلاك جديد",
    editDialogTitle: "تعديل هذا الاستهلاك",
    service: "الخدمة",
    servicePlaceholder: "اختيار خدمة",
    name: "اسم الاستهلاك",
    namePlaceholder: "مثال: عشاء",
    price: "سعر الاستهلاك",
    createSubmit: "إنشاء",
    editSubmit: "حفظ",
    cancel: "إلغاء"
  }
};
const factures$1 = {
  title: "الفواتير",
  topBtn: "إنشاء لفاتورة حجز",
  emptyBill: "لا توجد فواتير حالياً، حاول إنشاء فاتورة جديدة",
  settings: {
    title: "إعدادات الفاتورة",
    descreption: "تعديل إعدادات الفوترة هنا",
    tva: "قيمة ضريبة القيمة المضافة (%)",
    taxes: "ضريبة الإقامة",
    taxesDescreption: "قيمة ضريبة الإقامة بالدينار الجزائري لكل شخص",
    timbre: "طابع الجمارك",
    timbreDescreption: "قيمة الطابع (%)",
    save: "حفظ"
  },
  table: {
    guestsList: "قائمة الضيوف",
    show: "عرض",
    email: "البريد الإلكتروني",
    print: "طباعة",
    download: "تنزيل",
    factureTitle: "الفاتورة"
  }
};
const guests$1 = {
  addGuestsTitle: "إضافة ضيوف",
  guestsListTitle: "قائمة الضيوف",
  addBtn: "إضافة",
  firstName: "الاسم الأول",
  lastName: "الاسم الأخير",
  saveBtn: "حفظ",
  addGuestsBtn: "إضافة ضيوف"
};
const events$1 = {
  title: "الفعاليات",
  createLink: "إنشاء فعالية",
  pageHeading: "قائمة الفعاليات",
  emptyEvents: "لا توجد فعاليات حالياً، حاول إنشاء فعالية جديدة",
  card: {
    price: "السعر",
    da: "دج",
    eventDate: "تاريخ الفعالية",
    eventStartDate: "تاريخ بداية الفعالية",
    eventEndDate: "تاريخ نهاية الفعالية",
    descreption: "الوصف",
    createdBy: "تم الإنشاء بواسطة",
    editBtn: "تعديل",
    eventDeleteDescreption: "لا يمكن التراجع عن هذا الإجراء. ستقوم بحذف هذه الفعالية نهائيًا"
  },
  form: {
    createTitle: "إنشاء فعالية",
    editTitle: "تعديل فعالية",
    eventDate: "تاريخ الفعالية",
    eventDateDescreption: "أدخل تاريخ أو نطاق تاريخ بداية ونهاية الفعالية",
    name: "اسم الفعالية",
    namePlaceholder: "مثال: حفلة 16 إبريل",
    nameDescreption: "أدخل اسم واضح وبسيط للفعالية",
    price: "السعر",
    priceDescreption: "ما هو سعر دخول الفعالية؟",
    descreption: "الوصف",
    descreptionDescreption: "يمكنك إضافة عنوان أو تنسيق للوصف",
    assets: "الصور",
    assetsDescreption: "إضافة صور للفعالية (لا تتجاوز 10 صور لكل فعالية)",
    createBtn: "إنشاء",
    editBtn: "حفظ"
  }
};
const promotions$1 = {
  title: "العروض الترويجية",
  createBtn: "إنشاء عرض ترويجي",
  pageHeading: "قائمة العروض الترويجية",
  emptyPromotions: "لا توجد عروض ترويجية حالياً، حاول إنشاء عرض جديد",
  card: {
    da: "دج",
    activeState: "نشط",
    inactiveState: "غير نشط",
    date: "تاريخ العرض الترويجي",
    startDate: "تاريخ بداية العرض الترويجي",
    endDate: "تاريخ نهاية العرض الترويجي",
    descreption: "الوصف",
    createdBy: "تم الإنشاء بواسطة",
    swichOn: "إيقاف العرض الترويجي",
    swichOff: "تشغيل العرض الترويجي",
    edit: "تعديل",
    deletePromotionDescreption: "لا يمكن التراجع عن هذا الإجراء. ستقوم بحذف هذا العرض الترويجي نهائيًا"
  },
  form: {
    createTitle: "إنشاء عرض ترويجي",
    editTitle: "تعديل عرض ترويجي",
    date: "تاريخ العرض الترويجي",
    dateDescreption: "أدخل تاريخ أو نطاق تاريخ بداية ونهاية العرض الترويجي",
    value: "قيمة العرض الترويجي",
    valueDescreption: "أدخل قيمة العرض الترويجي بالدينار الجزائري",
    descreption: "الوصف",
    descreptionDescreption: "يمكنك إضافة عنوان أو تنسيق للوصف",
    assets: "الصور",
    assetsDescreption: "إضافة صور للعرض الترويجي (لا تتجاوز 10 صور لكل عرض)",
    createBtn: "إنشاء",
    editBtn: "حفظ"
  }
};
const roles$1 = {
  title: "الأدوار",
  create: "إضافة دور",
  permissions: "الأذونات",
  dialogHeader: "قائمة الأذونات لهذا الدور",
  cancel: "إلغاء",
  edit: "تعديل",
  deleteRoleDescreption: "لا يمكن التراجع عن هذا الإجراء. ستقوم بحذف هذا الدور نهائيًا، سيحصل المستخدمون الذين يمتلكون هذا الدور على دور المدير العادي ويفقدون جميع أذوناتهم",
  "delete": "حذف",
  deleteDialogHeader: "هل أنت متأكد؟",
  form: {
    createTitle: "إنشاء دور",
    editTitle: "تعديل دور",
    name: "اسم الدور",
    nameDescreption: "يجب أن يكون اسم الدور فريدًا",
    promotions: "قائمة الأذونات",
    promotionsDescreption: "تعيين الأذونات لهذا الدور",
    createBtn: "إنشاء",
    editBtn: "حفظ"
  }
};
const users$1 = {
  title: "الموظفون",
  createBtn: "إضافة موظف",
  edit: "تعديل",
  "delete": "حذف",
  dialogHeader: "هل أنت متأكد؟",
  dialogDescreption: "لا يمكن التراجع عن هذا الإجراء. ستقوم بحذف هذا المستخدم نهائيًا",
  cancel: "إلغاء",
  form: {
    createTitle: "إنشاء موظف",
    editTitle: "تعديل موظف",
    firstName: "الاسم الأول للموظف",
    lastName: "اسم العائلة للموظف",
    email: "البريد الإلكتروني للموظف",
    emailDescreption: "يجب أن يكون البريد الإلكتروني فريدًا لكل مستخدم",
    phone: "رقم هاتف الموظف",
    phoneDescreption: "يجب أن يكون رقم الهاتف فريدًا لكل مستخدم",
    role: "الدور",
    roleDescreption: "تعيين دور لهذا الموظف",
    rolePlaceholder: "اختيار دور...",
    rolePlaceholder2: "ابحث عن دور...",
    emptyRole: "لا يوجد دور",
    editBtn: "حفظ",
    createBtn: "إنشاء"
  }
};
const client$1 = {
  navbar: {
    home: "الصفحة الرئيسية",
    rooms: "غرفنا",
    services: "الخدمات",
    contactUs: "اتصل بنا",
    login: "تسجيل الدخول",
    swichLang: "تغيير اللغة",
    userNav: {
      profile: "الملف الشخصي",
      compte: "الحساب",
      myBookings: "حجوزاتي",
      logOut: "تسجيل الخروج"
    }
  },
  home: {
    title: "الصفحة الرئيسية",
    metaDescreption: "مرحبًا بكم في الموقع الرسمي لفندق سيدي النووي. اكتشفوا غرفنا، خدماتنا، العروض الترويجية وحجزوا الآن لإقامة لا تُنسى.",
    promotions: "العروض الترويجية",
    promotionsDescreption: "عروض حصرية لإقامة لا تُنسى. استفيدوا من عروضنا الاستثنائية واحجزوا إقامتكم بأسعار مميزة. اكتشفوا عروضنا الخاصة واحصلوا على تخفيضات على الغرف، حزم العافية، وأكثر من ذلك.",
    events: "الفعاليات",
    eventsDescreption: "فعاليات لا تُنسى في قلب الجزائر. عيشوا لحظات فريدة من خلال المشاركة في فعالياتنا الحصرية. سواء كانت أمسيات موضوعية، حفلات موسيقية، أو مهرجانات محلية، يعد فندقنا المكان المثالي للانطلاق في جميع مغامراتكم."
  },
  sections: {
    banner: {
      title: "سيدي النووي",
      descreption: "مرحبًا بكم في سيدي النووي - ملاذكم الفاخر في قلب الشراقة. اكتشفوا الراحة التي لا مثيل لها والأناقة الرفيعة في وسط الجزائر. يوفر فندقنا إطلالات خلابة، ومرافق عالية الجودة، وخدمة استثنائية لجعل إقامتكم لا تُنسى.",
      form: {
        date: "التواريخ",
        guestNumber: "عدد الأشخاص",
        kidsNumber: "عدد الأطفال",
        search: "ابحث"
      }
    },
    promotion: {
      cardHeader: "خصم بنسبة",
      da: "دينار جزائري",
      singleDate: "في",
      multipleDateStart: "من",
      multipleDateEnd: "حتى",
      actionBtn: "عرض المزيد",
      title: "عروض ترويجية",
      metaDescription: "استفيدوا من العروض الحصرية لفندق سيدي النووي واحجزوا إقامتكم بأسعار مخفضة."
    },
    event: {
      da: "دينار جزائري",
      singleDate: "في",
      multipleDateStart: "من",
      multipleDateEnd: "حتى",
      actionBtn: "عرض المزيد",
      title: "فعالية",
      metaDescreption: "اكتشفوا فعاليات فندق سيدي النووي وشاركوا في تجارب لا تُنسى."
    },
    rooms: {
      title: "غرفنا",
      descreption: "اكتشفوا غرفنا الواسعة والمزخرفة التي توفر جميع وسائل الراحة الحديثة لإقامة ممتعة. سواء كنتم تسافرون بمفردكم أو مع العائلة أو الأصدقاء، لدينا الغرفة المثالية لكم.",
      tabTrigger: "الغرف",
      roomCard: {
        da: "دينار جزائري",
        features: "ميزات الغرفة",
        actionBtn: "احجز الآن"
      }
    },
    services: {
      title: "الخدمات",
      description: "نقدم مجموعة من الخدمات المصممة لجعل إقامتكم أكثر راحة. سواء كنتم ترغبون في الاسترخاء، أو تناول وجبات لذيذة، أو الاستمتاع بمرافق إضافية، نحن هنا لتلبية جميع احتياجاتكم.",
      metaDescreption: "اكتشفوا الخدمات التي يقدمها فندق سيدي النووي لجعل إقامتكم أكثر راحة.",
      actionBtn: "عرض المزيد",
      consumptions: "الاستهلاك المتاح في هذه الخدمة:"
    },
    contact: {
      title: "اتصل بنا",
      description: "يمكنكم إرسال رسالة لنا عبر هذا النموذج. سنبذل قصارى جهدنا للرد على جميع استفساراتكم في أقرب وقت ممكن.",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      submit: "إرسال"
    }
  },
  profile: {
    title: "الملف الشخصي",
    section1: {
      title: "المعلومات الشخصية",
      firstName: "الاسم الأول",
      lastName: "الاسم الأخير",
      email: "البريد الإلكتروني",
      emailDescreption: "يجب أن يكون البريد الإلكتروني فريدًا لكل مستخدم",
      phone: "رقم هاتف الموظف",
      phoneDescreption: "يجب أن يكون رقم الهاتف فريدًا لكل مستخدم",
      emailValidation: "عنوان بريدك الإلكتروني غير مُحقق.",
      sendEmailValidation: "اضغط هنا لإعادة إرسال بريد التحقق.",
      validationSended: "تم إرسال رابط تحقق جديد إلى عنوان بريدك الإلكتروني.",
      submit: "حفظ"
    },
    section2: {
      title: "تحديث كلمة المرور",
      subtitle: "تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية للبقاء آمنًا",
      password: "كلمة المرور الحالية",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      submit: "حفظ"
    },
    section3: {
      title: "حذف الحساب",
      subtitle: "بمجرد حذف حسابك، ستتم إزالة جميع موارده وبياناته بشكل دائم. قبل حذف حسابك، يرجى تنزيل جميع البيانات أو المعلومات التي ترغب في الاحتفاظ بها.",
      submit: "حذف الحساب",
      dialogTitle: "هل أنت متأكد أنك تريد حذف حسابك؟",
      dialogDescreption: "بمجرد حذف حسابك، ستتم إزالة جميع موارده وبياناته بشكل دائم. يرجى إدخال كلمة المرور الخاصة بك لتأكيد رغبتك في حذف حسابك بشكل دائم.",
      placeholder: "كلمة المرور",
      cancel: "إلغاء",
      "delete": "حذف"
    }
  },
  myBookings: {
    title: "حجوزاتي",
    metaDescreption: "قم بمراجعة وإدارة جميع حجوزاتك في فندق سيدي النووي من هذه الصفحة.",
    show: "عرض",
    cancel: "إلغاء",
    dialogTitle: "هل أنت متأكد؟",
    dialogDescreption: "هل أنت متأكد أنك تريد إلغاء هذه الحجز؟",
    accept: "نعم",
    deni: "لا",
    booking: {
      title: "حجز",
      metaDescreption: "قم بحجز إقامتك في فندق سيدي النووي في بضع خطوات بسيطة.",
      infoCard: "المعلومات الشخصية",
      showProfile: "عرض الملف الشخصي",
      bookingDetails: "تفاصيل حجزك",
      checkIn: "الوصول",
      checkOut: "المغادرة",
      guestNumber: "عدد الأشخاص",
      adult: "بالغ",
      and: "و",
      babys: "أطفال",
      nights: "ليلة",
      time: "مدة الإقامة",
      pricingCardHeader: "ملخص المبلغ",
      pricingCardFooter: "يشمل هذا السعر جميع الضرائب",
      da: "د.ج",
      room: "غرفة",
      "with": "مع",
      beeds: "أسرة",
      showMore: "عرض المزيد",
      features: "المميزات"
    }
  },
  aviableRooms: {
    title: "الغرف المتاحة",
    metaDescreption: "اطلع على الغرف المتاحة في فندق سيدي النووي واختر الغرفة التي تناسبك لإقامة مريحة.",
    pageHeader: "أكمل حجزك",
    da: "د.ج",
    detailsCard: {
      header: "تفاصيل حجزك",
      checkIn: "الوصول",
      checkOut: "المغادرة",
      time: "مدة الإقامة",
      nights: "ليلة"
    },
    selectionCard: {
      header: "لقد اخترت لـ",
      and: "و",
      babys: "أطفال",
      adult: "بالغ",
      rooms: "غرفة",
      nights: "ليال",
      btn: "تعديل الاختيار"
    },
    pricingCard: {
      header: "ملخص المبلغ",
      footer: "يشمل هذا السعر جميع الضرائب"
    },
    form: {
      firstName: "الاسم الأول",
      lastName: "اللقب",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      submit: "احجز الآن"
    },
    roomServce: {
      title: "خدمة الغرف",
      rooms: "الغرف",
      type: "نوع الإقامة",
      beeds: "عدد الأسرة",
      pricing: "السعر",
      select: "اختر الغرف",
      consumptions: "المستهلكات",
      da: "د.ج"
    },
    bookingCard: {
      btn: "الخطوة الأخيرة",
      tot: "المجموع",
      da: "د.ج",
      roomNumber: "الغرفة رقم",
      room: "غرفة",
      "with": "مع",
      beeds: "أسرة",
      "for": "لـ",
      features: "المميزات"
    }
  },
  footer: {
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    links: "الروابط",
    socialMedia: "وسائل التواصل الاجتماعي",
    description: "مرحبًا بكم في سيدي النووي - ملاذكم الفاخر في قلب الشراقة. اكتشفوا الراحة غير المسبوقة والأناقة الرفيعة في قلب الجزائر. يقدم فندقنا إطلالات خلابة ومرافق من الدرجة الأولى، وخدمة استثنائية لجعل إقامتكم لا تُنسى."
  }
};
const ar = {
  layout: layout$1,
  auth: auth$1,
  components: components$1,
  dashboard: dashboard$1,
  notifications: notifications$1,
  messages: messages$1,
  profile: profile$1,
  bookings: bookings$1,
  booking: booking$1,
  aviableRooms: aviableRooms$1,
  rooms: rooms$1,
  features: features$1,
  services: services$1,
  consumptions: consumptions$1,
  factures: factures$1,
  guests: guests$1,
  events: events$1,
  promotions: promotions$1,
  roles: roles$1,
  users: users$1,
  client: client$1
};
const layout = {
  navBar: {
    addBooking: "Ajouter une réservation",
    themeTolip: "Changer le thème",
    dialog: {
      dialogTitle: "Ajouter une réservation",
      dialogDescreption: "Chercher des chambres disponible",
      form: {
        dates: "Date début et fin de réservation",
        guestNumber: "Nombre des personne",
        needValue: "Choisi cette option lors cette réservation est pour un société",
        submit: "Recherche"
      }
    },
    notifications: {
      tolip: "Notifications",
      "new": "Nouvelle réservation",
      all: "Tout notifications"
    },
    userNav: {
      tolip: "Profile",
      dashboard: "Tableaux De Bord",
      inbox: "Boîte de réception",
      account: "Compte",
      logout: "Se déconnecter"
    }
  },
  sideBar: {
    dashboard: "Tableaux De Bord",
    bookingsGroupe: "Moteur de réservation",
    bookings: "Réservations",
    historical: "Historique",
    rooms: "Chambres",
    owner: "La propriétaire",
    allRooms: "Tous Les Chambres",
    features: "Caractéristiques",
    services: "Services",
    allServices: "Tous Les Services",
    consumption: "Consommations",
    bills: "Factures",
    events: "Evènements",
    promotions: "Promotions",
    managment: "Management",
    users: "Utilisateurs",
    roles: "Rôles",
    employs: "Employés"
  },
  notif: "à fait un nouveaux réservation"
};
const auth = {
  auth: "Email ou N° téléphone",
  password: "Mot de passe",
  remember: "Souviens moi",
  forget: "Mot de passe oublié ?",
  submit: "Se Connecter",
  confirmText: "Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer.",
  confirm: "Confirmer",
  forgetText: "Vous avez oublié votre mot de passe ? Aucun problème. Indiquez-nous simplement votre adresse e-mail et nous vous enverrons par e-mail un lien de réinitialisation de mot de passe qui vous permettra de choisir un nouveau mot de passe.",
  resetLink: "Lien de réinitialisation du mot de passe par e-mail",
  confirmPassword: "Confirmez le mot de passe",
  reset: "Réinitialiser le mot de passe"
};
const components = {
  datePicker: {
    title: "Choisis une date"
  },
  dataTable: {
    viewOption: {
      tolip: "Contrôler la visibilité des colonnes",
      show: "Voir",
      title: "Basculer les colonnes",
      selection: "ligne(s) sélectionné(s).",
      client: "Client",
      checkIn: "Check in",
      checkOut: "Check out",
      bookingDate: "Date de réservation",
      status: "Status",
      roomNumber: "Numéro de chambre",
      type: "Type",
      price: "Prix",
      featureName: "Nom de caractéristique",
      needValue: "Besoin de valeur",
      categorie: "Catégorie",
      billNumber: "N° Facture",
      email: "Email",
      date: "Date",
      role: "Rôle",
      permissions: "Permissions",
      utilisateurs: "Utilisateurs",
      phone: "N° téléphone",
      createdAtDate: "date d'inscription",
      ref: "Ref",
      rooms: "Chambres réservés",
      dates: "date d'entrée / sortie"
    },
    pagination: {
      footer: "ligne(s) afficher"
    },
    header: {
      up: "Croissante",
      down: "Décroissante",
      hide: "Cacher"
    }
  },
  fileUploader: "Télécharger ou déposer des images ici"
};
const dashboard = {
  title: "Tableaux De Bord",
  dataChart1: "Entrés d'aujourd'hui",
  dataChart2: "Sorties d'aujourd'hui",
  dataChart3: "Réservations de jour",
  dataChart4: "Réservations de mois",
  dataChartFooter1: "du dernier jour",
  dataChartFooter2: "de mois dernier",
  chartTitle: "Les types plus réservé le mois dernier",
  chartSubTitle: "Ces statistique inclus les réservations annuléers et refusées",
  chartLabel: "Réservations"
};
const notifications = {
  title: "Notifications",
  readAll: "Tout marquer comme lu",
  deleteAll: "Supprimer Tous",
  text1: "a fait une réservation de",
  text2: "vers"
};
const messages = {
  title: "Boîte de réception",
  readAll: "Tout marquer comme lu",
  deleteAll: "Supprimer Tous",
  all: "Tous",
  unread: "Non lu",
  user: "Utilisateur",
  replyToMail: "Reprendre avec votre adresse mail",
  "delete": "Supprimer",
  noMessage: "Aucun message a afficher",
  subject: "Sujet",
  replyTo: "Repondre à :",
  message: "Message",
  placeholder: "Répendre à CLIENT",
  submit: "Envoyé"
};
const profile = {
  section1: {
    title: "Les informations personnelles",
    form: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      emailDescreption: "L'email doit être unique pour chaque utilisateur",
      phone: "N° téléphone d'employé",
      phoneDescreption: "Le N° téléphone doit être unique pour chaque utilisateur",
      emailValidation: "Votre adresse email n'est pas vérifiée.",
      sendEmailValidation: "Cliquez ici pour renvoyer l'e-mail de vérification.",
      validationSended: "Un nouveau lien de vérification a été envoyé à votre adresse e-mail.",
      submit: "Enregistrer"
    }
  },
  section2: {
    title: "Mettre à jour le mot de passe",
    subtitle: "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité",
    form: {
      password: "Mot de passe actuel",
      newPassword: "nouveau mot de passe",
      confirmPassword: "Confirmez le mot de passe",
      submit: "Enregistrer"
    }
  },
  section3: {
    title: "Supprimer le compte",
    subtitle: "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver.",
    submit: "Supprimer le compte",
    dialogTitle: "Etes-vous sûr de vouloir supprimer votre compte ?",
    dialogDescreption: "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte.",
    placeholder: "Password",
    cancel: "Annuler",
    "delete": "Supprimer"
  }
};
const bookings = {
  title: "Réservations",
  toastMessage: "Paramètre de facturation",
  emptyPage: "Aucun réservations pour l'instant, essayez de créer une nouvelle",
  historicalTitle: "Historique",
  tableHeader: {
    client: "Client",
    checkIn: "Check in",
    checkOut: "Check out",
    bookingDate: "Date de réservation",
    status: "Status",
    bill: "Facture",
    show: "Voir",
    dialogTitle: "Mode de payment",
    dialogDescreption: "Choisi le mode de payment pour cette facture",
    opt1: "Espece",
    opt2: "Chèque",
    approve: "Confirmer",
    cancel: "Refusé"
  }
};
const booking = {
  title: "Réservation",
  pageHeading: "Réservation de ",
  clientCard: "Informations de client",
  bookingCard: "Détails de réservation",
  checkIn: "Arrivée",
  checkOut: "Départ",
  guestNumber: "Nombre des personnes",
  adult: "adult",
  and: "et",
  babys: "bébés",
  nights: "nuit",
  pricingCard: "Récapitulatif du montant",
  pricingFooter: "Ce prix avec tout tax inclus",
  da: "DA",
  rooms: "Chambre",
  "with": "avec",
  beeds: "lits",
  showMore: "Voir Plus",
  features: "Caractéristiques"
};
const aviableRooms = {
  title: "Chambres disponible",
  metaDescreption: "Découvrez les chambres disponibles à l'hôtel Sidi El Noui et faites votre réservation en quelques clics.",
  name: "Nom",
  adress: "Adresse",
  lastName: "Prénom",
  nif: "Numéro d'Identification Fiscale",
  nis: "Numéro d'Identification Statistique",
  nrc: "Numéro  de registre de commerce",
  na: "Numéro d'article",
  email: "Email",
  emailDescreption: "L'email doit être unique pour chaque utilisateur",
  phone: "N° téléphone",
  phoneDescreption: "Le N° téléphone doit être unique pour chaque utilisateur",
  tableHeader: "Choisi un ou plusieur chambres à réserver",
  roomNumber: "Numéro de chambre",
  type: "Type de chambre",
  ttc: "Prix TTC",
  features: "Caractéristiques",
  roomCode: "Chambre N°",
  da: "DA",
  cunsumptionHeader: "Ajouter les consommation de cetter réservation",
  submit: "Réserver"
};
const rooms = {
  title: "Chambres",
  createTitle: "Chambre Création",
  editTitle: "Chambre Modification",
  show: "Voir",
  edit: "Modifier",
  aviable: "Marqué comme disponible",
  inaviable: "Marqué comme hors service",
  topButton: "Crée un chambre",
  emptyText: "Aucun chambres pour l'instant, essayez de créer une nouvelle",
  roomNumber: "La Chambre N°",
  price: "Prix de chmabre",
  da: "DA",
  roomForm: {
    roomNumber: "Numéro de chmabre",
    roomNumberDescreption: "Quel est le numéro unique de cette chambre ?",
    price: "Prix de chmabre",
    priceDescreption: "Ce sont les prix de la chambre avec tous taxe inclus",
    beedsNumber: "Nombre de lits",
    beedsNumberDescreption: "Quel est le nombre de lits dans cette chambre",
    type: "Type",
    typeDescreption: "Quel est le type de cette chambre",
    typeSelect: "Selectioner un Type...",
    typeSearch: "Chercher un Type...",
    emptyTypeMessage: "Il n'existe pas le type",
    emptyTypeButton: "Ajouter un nouveau type",
    descreption: "Descreption",
    descreptionDescreption: "Entrer une description générale sur cette chambre",
    features: "Caractéristiques",
    featuresDescreption: "Choisis parmi ces caractéristiques, et ajouter des valeur aux caractéristiques qui'il besoin",
    assets: "Photos",
    assetsDescreption: "Ajouter des photos au chambres (ne dépasse pas 10 photos par chambres)",
    fileUploader: "Télécharger ou déposer des images ici",
    submit: "Crée",
    edit: "Enregistrer"
  },
  room: {
    title: "La Chambre N°:",
    "with": "avec",
    beeds: "lits",
    price: "Prix de chmabre",
    da: "DA",
    description: "Description",
    edit: "Modifier"
  }
};
const features = {
  title: "Caractéristiques",
  categorie: "Catégories",
  emptyFeatures: "Aucun caractéristiques pour l'instant, essayez de créer une nouvelle",
  emptyCategories: "Aucun categories pour l'instant, essayez de créer une nouvelle",
  form: {
    create: "Créer un Caractéristique",
    dialogHeader: "Ajouter un nouveau Caractéristique",
    name: "Nom de caractéristique",
    categorie: "Catégories",
    placeholder: "Example : wifi, dimension",
    selectInput: "Selectioner un categorie...",
    searchInput: "Chercher un categorie...",
    add: "Ajouter",
    add2: "au categorie",
    needValue: "Besoin de valeur",
    createSubmit: "Créer",
    cancel: "Annuler",
    edit: "Modifier",
    editHeader: "Modifier cette caractéristique",
    save: "Enregistrer",
    "delete": "Supprimer",
    deleteHeader: "Vous êtes sure?",
    deleteDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette caractéristique et chaque chambre avoir cette caractéristique va le perdre",
    addCategorie: "Ajouter un categorie",
    addCategorieHeader: "Ajouter un nouveau Catégorie",
    editCategorietHeader: "Modifier cette Catégorie",
    categorieName: "Nom de catégorie :",
    categoriePlaceholder: "Example : Générale, Internet",
    deleteCategorieDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce élément et chaque caractéristique de cette categorie va supprimé"
  }
};
const services = {
  title: "Services",
  createBtn: "Créer un service",
  emptyServices: "Aucun services pour l'instant, essayez de créer un nouveau",
  listHeader: "List des services",
  card: {
    aviable: "Disponible",
    inaviable: "Indisponible",
    descreption: "Description",
    toggleOff: "Marqué comme hors service",
    toggleOn: "Marqué comme disponible",
    editBtn: "Modifier",
    deleteServiceDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce élément et chaque consommations de ce service va supprimé"
  },
  form: {
    createTitle: "Service Création",
    editTitle: "Service Modification",
    name: "Nom de service",
    nameDescreption: "Entrer un nom claire et simple pour le nom de service",
    placeholder: "Exemple : Restaurant",
    descreption: "Description",
    descreptionDescreption: "Vous pouvez ajouter des titre ou bien des style au description",
    assets: "Photos",
    assetsDescreption: "Ajouter des photos au service (ne dépasse pas 10 photos par service)",
    createBtn: "Créer",
    editBtn: "Enregistrer"
  }
};
const consumptions = {
  title: "Consommations",
  emptyConsumptions: "Aucun consommations pour l'instant, essayez de créer un nouveau",
  listHeader: "List des consommations",
  card: {
    price: "Prix Unitaire:",
    da: "DA",
    deleteConsumptionDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette consommation"
  },
  form: {
    createBtn: "Créer un consommation",
    editBtn: "Modifier",
    createDialogTitle: "Créer un nouveau consommation",
    editDialogTitle: "Modifier cette consommation",
    service: "Service",
    servicePlaceholder: "Selectionner un service",
    name: "Nom de consommation",
    namePlaceholder: "Exemple : Diner",
    price: "Prix de consommation",
    createSubmit: "Créer",
    editSubmit: "Enregistrer",
    cancel: "Annuler"
  }
};
const factures = {
  title: "Factures",
  topBtn: "Générer pour une réservation",
  emptyBill: "Aucun factures pour l'instant, essayez de créer une nouvelle",
  settings: {
    title: "Parametre de facture",
    descreption: "Modifier les constant de facturation içi",
    tva: "La valeur de TVA en %",
    taxes: "Taxe de séjour",
    taxesDescreption: "la valeur de taxe de séjour en DA/personne",
    timbre: "Droit de timbre",
    timbreDescreption: "La valeur de tibmre en %",
    save: "Enregistrer"
  },
  table: {
    guestsList: "List des invités",
    show: "Voir",
    email: "Email",
    print: "Imprimer",
    download: "Télécharger",
    factureTitle: "Facture"
  }
};
const guests = {
  addGuestsTitle: "Ajouter des invités",
  guestsListTitle: "List d'invités",
  addBtn: "Ajouter",
  firstName: "Prénom",
  lastName: "Nom",
  saveBtn: "Enregistrer",
  addGuestsBtn: "Ajouter des invités"
};
const events = {
  title: "Evènements",
  createLink: "Créer un évènement",
  pageHeading: "List des évènements",
  emptyEvents: "Aucun évènement pour l'instant, essayez de créer une nouvelle",
  card: {
    price: "Prix",
    da: "DA",
    eventDate: "Date d'évènement",
    eventStartDate: "Date début d'évènement",
    eventEndDate: "Date fin d'évènement",
    descreption: "Descreption",
    createdBy: "Créé par",
    editBtn: "Modifier",
    eventDeleteDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette évènement"
  },
  form: {
    createTitle: "Création d'évènement",
    editTitle: "Modification d'évènement",
    eventDate: "Date d'évènement",
    eventDateDescreption: "Entrer la date ou le range de date de début et fin d'évènement",
    name: "Nom de l'évènement",
    namePlaceholder: "Exemple : fête 16 Avrile",
    nameDescreption: "Entrer un nom claire et simple pour le nom de l'évènement",
    price: "Prix",
    priceDescreption: "Quelle est le prix d'accés d'évènement",
    descreption: "Descreption",
    descreptionDescreption: "Vous pouvez ajouter des titre ou bien des style au description",
    assets: "Photos",
    assetsDescreption: "Ajouter des photos au l'évènement (ne dépasse pas 10 photos par évènement)",
    createBtn: "Créer",
    editBtn: "Enregistrer"
  }
};
const promotions = {
  title: "Promotions",
  createBtn: "Créer un promotion",
  pageHeading: "List des promotions",
  emptyPromotions: "Aucun promotion pour l'instant, essayez de créer une nouvelle",
  card: {
    da: "DA",
    activeState: "Active",
    inactiveState: "Désactivé",
    date: "Date de promotion",
    startDate: "Date début de promotion",
    endDate: "Date fin de promotion",
    descreption: "Descreption",
    createdBy: "Créé par",
    swichOn: "Désactivé la promotion",
    swichOff: "Activé la promotion",
    edit: "Modifier",
    deletePromotionDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette promotion"
  },
  form: {
    createTitle: "Création de Promotion",
    editTitle: "Modification de promotion",
    date: "Date de promotion",
    dateDescreption: "Entrer la date ou le range de date de début et fin de promotion",
    value: "Valeur de promotion",
    valueDescreption: "Entrer la Valeur de promotion en DA",
    descreption: "Descreption",
    descreptionDescreption: "Vous pouvez ajouter des titre ou bien des style au description",
    assets: "Photos",
    assetsDescreption: "Ajouter des photos au promotion (ne dépasse pas 10 photos par promotion)",
    createBtn: "Créer",
    editBtn: "Enregistrer"
  }
};
const roles = {
  title: "Rôles",
  create: "Ajouter un rôle",
  permissions: "Permissions",
  dialogHeader: "List des permissions pour le rôle",
  cancel: "Annuler",
  edit: "Modifier",
  deleteRoleDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce rôle, les utilisateur avec ce rôle sera prendre le rôle de simple admin et perdre tous leur permissions",
  "delete": "Supprimer",
  deleteDialogHeader: "Vous êtes sure?",
  form: {
    createTitle: "Rôle Creation",
    editTitle: "Rôle Modification",
    name: "Nom de rôle",
    nameDescreption: "Le nom de rôle doit être unique",
    promotions: "List des permissions",
    promotionsDescreption: "Assigner des permissions a ce rôle",
    createBtn: "Créer",
    editBtn: "Enregistrer"
  }
};
const users = {
  title: "Employés",
  createBtn: "Ajouter un employé",
  edit: "Modifier",
  "delete": "Supprimer",
  dialogHeader: "Vous êtes sure?",
  dialogDescreption: "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce utilisateur",
  cancel: "Annuler",
  form: {
    createTitle: "Créer un employé",
    editTitle: "Modifier un employé",
    firstName: "Prénom d'employé",
    lastName: "Nom d'employé",
    email: "Email d'employé",
    emailDescreption: "L'email doit être unique pour chaque utilisateur",
    phone: "N° téléphone d'employé",
    phoneDescreption: "Le N° téléphone doit être unique pour chaque utilisateur",
    role: "Rôle",
    roleDescreption: "Assigne un rôle au ce employé",
    rolePlaceholder: "Sélectionner un rôle...",
    rolePlaceholder2: "Chercher un rôle...",
    emptyRole: "Auccun rôle",
    editBtn: "Enregistrer",
    createBtn: "Créer"
  }
};
const client = {
  navbar: {
    home: "Accueil",
    rooms: "Nos Chambres",
    services: "Services",
    contactUs: "contactez-nous",
    login: "Se connecter",
    swichLang: "Changer la langue",
    userNav: {
      profile: "Profile",
      compte: "Compte",
      myBookings: "Mes réservations",
      logOut: "Se déconnecter"
    }
  },
  home: {
    title: "Accueil",
    metaDescreption: "Bienvenue sur le site officiel de l'hôtel Sidi El Noui. Découvrez nos chambres, services, promotions et réservez dès maintenant pour un séjour inoubliable.",
    promotions: "Promotions",
    promotionsDescreption: "Offres Exclusives pour un Séjour Inoubliable Profitez de nos promotions exceptionnelles et réservez votre séjour à un prix avantageux. Découvrez nos offres spéciales et bénéficiez de réductions sur les chambres, les forfaits bien-être, et bien plus encore.",
    events: "Evènements",
    eventsDescreption: "Des Événements Inoubliables au Cœur d'Alger, Vivez des moments uniques en participant à nos événements exclusifs. Que ce soit pour des soirées thématiques, des concerts, ou des festivals locaux, notre hôtel est le point de départ idéal pour toutes vosaventures."
  },
  sections: {
    banner: {
      title: "Sidi El Noui",
      descreption: "Bienvenue à SIDI EL NOUI - Votre refuge luxueux au cœur de Chéraga Découvrez un confort inégalé et une élégance raffinée en plein centre d'Alger. Notre hôtel offre des vues à couper le souffle, des équipements haut de gamme, et un service exceptionnel pour rendre votre séjour inoubliable.",
      form: {
        date: "dates",
        guestNumber: "Nombre des personne",
        kidsNumber: "Nombre des bébé",
        search: "Rechercher"
      }
    },
    promotion: {
      cardHeader: "Réduction de",
      da: "DA",
      singleDate: "Le",
      multipleDateStart: "De",
      multipleDateEnd: "Jusqu'a",
      actionBtn: "Voir Plus",
      title: "Promotion",
      metaDescription: "Profitez des promotions exclusives de l'hôtel Sidi El Noui et réservez votre séjour à prix réduit."
    },
    event: {
      da: "DA",
      singleDate: "Le",
      multipleDateStart: "De",
      multipleDateEnd: "Jusqu'a",
      actionBtn: "Voir Plus",
      title: "Événement",
      metaDescreption: "Découvrez nos événements à l'hôtel Sidi El Noui et participez à des expériences inoubliables."
    },
    rooms: {
      title: "Nos Chambres",
      descreption: "Découvrez nos chambres spacieuses et décorées avec, offrant tout le confort moderne pour un séjour des plus agréables. Que vous voyagiez seul, en couple ou en famille, nous avons la chambre parfaite pour vous.",
      tabTrigger: "Chambres",
      roomCard: {
        da: "DA",
        features: "Caractéristique de la chambre",
        actionBtn: "Réserver maintenant"
      }
    },
    services: {
      title: "Services",
      description: "Nous offrons une gamme de services conçus pour rendre votre séjour aussi agréable que possible. Que vous souhaitiez vous détendre, savourer de délicieux repas, ou profiter de commodités supplémentaires, nous sommes là pour répondre à tous vos besoins.",
      metaDescreption: "Découvrez les services offerts par l'hôtel Sidi El Noui pour rendre votre séjour encore plus agréable.",
      actionBtn: "Voir Plus",
      consumptions: "Consommation disponible dans ce service :"
    },
    contact: {
      title: "contactez-nous",
      description: "Vous pouvez nous envoyer un message via ce formulaire de contact. Nous ferons de notre mieux pour répondre à toutes vos questions dans les plus brefs délais.",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyé"
    }
  },
  profile: {
    title: "Profile",
    section1: {
      title: "Les informations personnelles",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      emailDescreption: "L'email doit être unique pour chaque utilisateur",
      phone: "N° téléphone d'employé",
      phoneDescreption: "Le N° téléphone doit être unique pour chaque utilisateur",
      emailValidation: "Votre adresse email n'est pas vérifiée.",
      sendEmailValidation: "Cliquez ici pour renvoyer l'e-mail de vérification.",
      validationSended: "Un nouveau lien de vérification a été envoyé à votre adresse e-mail.",
      submit: "Enregistrer"
    },
    section2: {
      title: "Mettre à jour le mot de passe",
      subtitle: "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité",
      password: "Mot de passe actuel",
      newPassword: "nouveau mot de passe",
      confirmPassword: "Confirmez le mot de passe",
      submit: "Enregistrer"
    },
    section3: {
      title: "Supprimer le compte",
      subtitle: "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver.",
      submit: "Supprimer le compte",
      dialogTitle: "Etes-vous sûr de vouloir supprimer votre compte ?",
      dialogDescreption: "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte.",
      placeholder: "Password",
      cancel: "Annuler",
      "delete": "Supprimer"
    }
  },
  myBookings: {
    title: "Mes Réservations",
    metaDescreption: "Consultez et gérez toutes vos réservations à l'hôtel Sidi El Noui depuis cette page.",
    show: "Voir",
    cancel: "Annuler",
    dialogTitle: "Vous êtes sure?",
    dialogDescreption: "Vous êtes sur que vous voulez annuler cette réservation",
    accept: "Oui",
    deni: "Non",
    booking: {
      title: "Réservation",
      metaDescreption: "Effectuez votre réservation à l'hôtel Sidi El Noui en quelques étapes simples.",
      infoCard: "Informations personnels",
      showProfile: "Voir le profile",
      bookingDetails: "Détails de votre réservation",
      checkIn: "Arrivée",
      checkOut: "Départ",
      guestNumber: "Nombre des personnes",
      adult: "adult",
      and: "et",
      babys: "bébés",
      nights: "nuit",
      time: "Durée de séjour",
      pricingCardHeader: "Récapitulatif du montant",
      pricingCardFooter: "Ce prix avec tout tax inclus",
      da: "DA",
      room: "Chambre",
      "with": "avec",
      beeds: "lits",
      showMore: "Voir Plus",
      features: "Caractéristiques"
    }
  },
  aviableRooms: {
    title: "Chambres disponibles",
    metaDescreption: "Consultez les chambres disponibles à l'hôtel Sidi El Noui et choisissez celle qui vous convient pour un séjour confortable.",
    pageHeader: "Finaliser votre réservation",
    da: "DA",
    detailsCard: {
      header: "Détails de votre réservation",
      checkIn: "Arrivée",
      checkOut: "Départ",
      time: "Durée de séjour",
      nights: "nuit"
    },
    selectionCard: {
      header: "Vous avez sélectionné pour",
      and: "et",
      babys: "bébés",
      adult: "adult",
      rooms: "chambre",
      nights: "nuits",
      btn: "Modifier la selection"
    },
    pricingCard: {
      header: "Récapitulatif du montant",
      footer: "Ce prix avec tout tax inclus"
    },
    form: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "N° téléphone",
      submit: "Réserver"
    },
    roomServce: {
      title: "Service de chambre",
      rooms: "Chambres",
      type: "Type de logement",
      beeds: "Nombre de lits",
      pricing: "Tarif",
      select: "Selectionner des chambres",
      consumptions: "Consommations",
      da: "DA"
    },
    bookingCard: {
      btn: "Dernière étape",
      tot: "Total",
      da: "DA",
      roomNumber: "Chambre N°",
      room: "Chambre",
      "with": "avec",
      beeds: "lits",
      "for": "pour",
      features: "Caractéristiques"
    }
  },
  footer: {
    phone: "N° téléphone",
    email: "Email",
    address: "Adresse",
    links: "Liens",
    socialMedia: "Réseaux Sociaux",
    description: "Bienvenue à SIDI EL NOUI - Votre refuge luxueux au cœur de Chéraga Découvrez un confort inégalé et une élégance raffinée en plein centre d'Alger. Notre hôtel offre des vues à couper le souffle, des équipements haut de gamme, et un service exceptionnel pour rendre votre séjour inoubliable."
  }
};
const fr = {
  layout,
  auth,
  components,
  dashboard,
  notifications,
  messages,
  profile,
  bookings,
  booking,
  aviableRooms,
  rooms,
  features,
  services,
  consumptions,
  factures,
  guests,
  events,
  promotions,
  roles,
  users,
  client
};
const resources = {
  fr: {
    translation: fr
  },
  ar: {
    translation: ar
  }
};
const initI18n = (initialLang) => {
  if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
      resources,
      lng: initialLang,
      fallbackLng: "ar",
      interpolation: {
        escapeValue: false
      }
    });
  }
  return i18n;
};
createServer(
  (page) => createInertiaApp({
    page,
    render: (element) => ReactDOMServer.renderToString(element),
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Bookings/AviableRooms.jsx": __vite_glob_0_0, "./Pages/Admin/Bookings/Booking.jsx": __vite_glob_0_1, "./Pages/Admin/Bookings/Bookings.jsx": __vite_glob_0_2, "./Pages/Admin/Bookings/Calendar.jsx": __vite_glob_0_3, "./Pages/Admin/Bookings/Historique.jsx": __vite_glob_0_4, "./Pages/Admin/Dashboard.jsx": __vite_glob_0_5, "./Pages/Admin/Employes/EmployeForm.jsx": __vite_glob_0_6, "./Pages/Admin/Employes/Employees.jsx": __vite_glob_0_7, "./Pages/Admin/Events/EventForm.jsx": __vite_glob_0_8, "./Pages/Admin/Events/Events.jsx": __vite_glob_0_9, "./Pages/Admin/Factures/CreateFacture.jsx": __vite_glob_0_10, "./Pages/Admin/Factures/CreateGuests.jsx": __vite_glob_0_11, "./Pages/Admin/Factures/Facture.jsx": __vite_glob_0_12, "./Pages/Admin/Factures/Factures.jsx": __vite_glob_0_13, "./Pages/Admin/Factures/GuestList.jsx": __vite_glob_0_14, "./Pages/Admin/Messages/Messages.jsx": __vite_glob_0_15, "./Pages/Admin/Notifications/Notifications.jsx": __vite_glob_0_16, "./Pages/Admin/Profile/Edit.jsx": __vite_glob_0_17, "./Pages/Admin/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_18, "./Pages/Admin/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_19, "./Pages/Admin/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_20, "./Pages/Admin/Promotions/PromotionForm.jsx": __vite_glob_0_21, "./Pages/Admin/Promotions/Promotions.jsx": __vite_glob_0_22, "./Pages/Admin/Roles/RoleForm.jsx": __vite_glob_0_23, "./Pages/Admin/Roles/Roles.jsx": __vite_glob_0_24, "./Pages/Admin/Rooms/Features.jsx": __vite_glob_0_25, "./Pages/Admin/Rooms/Room.jsx": __vite_glob_0_26, "./Pages/Admin/Rooms/RoomCreate.jsx": __vite_glob_0_27, "./Pages/Admin/Rooms/RoomEdit.jsx": __vite_glob_0_28, "./Pages/Admin/Rooms/Rooms.jsx": __vite_glob_0_29, "./Pages/Admin/Services/Consumptions.jsx": __vite_glob_0_30, "./Pages/Admin/Services/CreateService.jsx": __vite_glob_0_31, "./Pages/Admin/Services/ServiceForm.jsx": __vite_glob_0_32, "./Pages/Admin/Services/Services.jsx": __vite_glob_0_33, "./Pages/Auth/AdminLogin.jsx": __vite_glob_0_34, "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_35, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_36, "./Pages/Auth/Login.jsx": __vite_glob_0_37, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_38, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_39, "./Pages/Client/AviableRooms.jsx": __vite_glob_0_40, "./Pages/Client/Bookings/Booking.jsx": __vite_glob_0_41, "./Pages/Client/Bookings/MyBookings.jsx": __vite_glob_0_42, "./Pages/Client/Events/Show.jsx": __vite_glob_0_43, "./Pages/Client/Home.jsx": __vite_glob_0_44, "./Pages/Client/Profile/Edit.jsx": __vite_glob_0_45, "./Pages/Client/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_46, "./Pages/Client/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_47, "./Pages/Client/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_48, "./Pages/Client/Promotions/Show.jsx": __vite_glob_0_49, "./Pages/Client/Services/Show.jsx": __vite_glob_0_50, "./Pages/Error.jsx": __vite_glob_0_51 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => {
      const { locale } = props.initialPage.props;
      initI18n(locale);
      return /* @__PURE__ */ jsx(I18nextProvider, { i18n, children: /* @__PURE__ */ jsx(App, { ...props }) });
    }
  })
);
export {
  Card as C,
  CardContent as a,
  CardFooter as b,
  cn as c
};
