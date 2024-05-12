import { answerMCQuestion, answerSAQuestion, rateArticle, } from "@/controllers/question-controller";
import { logRequest, protect } from "@/utils/middleware";
import { createEdgeRouter } from "next-connect";
import { NextResponse, type NextRequest } from "next/server";

interface RequestContext {
    params: {
        question_id: string;
        article_id: string;
    };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

router.use(logRequest);
router.use(protect);
router.post(rateArticle);

export async function GET(request: NextRequest, ctx: RequestContext) {
    const result = await router.run(request, ctx);
    if (result instanceof NextResponse) {
        return result;
    }
    // Handle the case where result is not a NextResponse
    // You might want to return a default NextResponse or throw an error
    throw new Error("Expected a NextResponse from router.run");
}

export async function POST(request: NextRequest, ctx: RequestContext) {
    const result = await router.run(request, ctx);
    if (result instanceof NextResponse) {
        return result;
    }
    // Handle the case where result is not a NextResponse
    // You might want to return a default NextResponse or throw an error
    throw new Error("Expected a NextResponse from router.run");
}