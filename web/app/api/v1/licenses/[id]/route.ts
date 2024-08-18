import { restrictTo } from "@/server/controllers/auth-controller";
import { deleteLicense, getLicense } from "@/server/controllers/license-controller";
import { logRequest } from "@/server/middleware";
import { Role } from "@/server/models/enum";
import { handleRequest } from "@/server/utils/handle-request";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

export interface Context {
    params?: {
        id: string;
    };
}

const router = createEdgeRouter<NextRequest, Context>();

// Middleware
router.use(logRequest);
router.use(restrictTo(Role.SYSTEM));

// /api/v1/license/[id]
router.get(getLicense);
router.delete(deleteLicense);

export const GET = (request: NextRequest, ctx: Context) => handleRequest(router, request, ctx);
export const DELETE = (request: NextRequest, ctx: Context) => handleRequest(router, request, ctx);
