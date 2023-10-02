// user/[userId/articles-records
// this route is used to update user level and update user-article-record
import { db } from "@/configs/firestore-config";
import { authOptions } from "@/lib/nextauth";
import { getServerSession } from "next-auth";
import { use } from "react";

// get user-article-record
export async function GET(req: Request, res: Response) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return new Response(JSON.stringify({
                message: 'Unauthorized',
            }), { status: 403 })
        }
        const userId = session.user.id;

        // get all user-article-records of user
        const userArticleRecords = db.collection('user-article-records')
            .where('userId', '==', userId)
            .orderBy('createdAt', 'desc')

        const articlesSnapshot = await userArticleRecords.get();
        const articles = articlesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        // console.log('userArticleRecordRef', articles);
        return new Response(JSON.stringify({
            // data: userArticleRecordRef,
            message: 'success',
            articles,
        }), { status: 200 })
        // return new Response(JSON.stringify({
        //     message: 'success',
        // }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({
            message: error,
        }), { status: 500 })
    }
};

// update user level
export async function PATCH(req: Request, res: Response) {
    try {
        const session = await getServerSession(authOptions);
        console.log('session----------------', session);
        if (!session) {
            return new Response(JSON.stringify({
                message: 'Unauthorized',
            }), { status: 403 })
        }
        const { articleId, rating, title } = await req.json();
        console.log('articleId', articleId);
        console.log('rating', rating);
        console.log('title', title);

        const userId = session.user.id;
        const userLevel = session.user.level;
        console.log('userLevel', userLevel);
        console.log('userId', userId);

        // update user level
        const userRef = db.collection('users')
            .doc(userId)
            .update({
                level: userLevel + (rating - 3),
            });
        console.log('new level', userLevel + (rating - 3));

        // update user-article-record
        const userArticleRecordRef = db.collection('user-article-records')
            .doc(`${userId}-${articleId}`)
            .update({
                rating: rating,
                status: 'completed',
                title: title,
                userLevel: userLevel,
                updatedLevel: userLevel + (rating - 3),
                updatedAt: new Date(),
            });
        return new Response(JSON.stringify({
            message: 'success',
            level: userLevel + (rating - 3),
        }), { status: 200 })
    } catch (error) {
        console.log('error', error);
        return new Response(JSON.stringify({
            message: error,
        }), { status: 500 })
    }
};