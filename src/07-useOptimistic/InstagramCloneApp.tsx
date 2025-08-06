import { useOptimistic, useState, useTransition } from 'react';

import { toast } from 'sonner';

interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

let lastId = 2;

export const InstagramCloneApp = () => {
  const [isPending, startTransition] = useTransition();

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: 'Great Picture!' },
    { id: 2, text: 'I Love it <3!' },
  ]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newCommentText: string) => {
      lastId++;
      return [
        ...currentComments,
        {
          id: lastId,
          text: newCommentText,
          optimistic: true,
        },
      ];
    }
  );

  const handleAddComment = async (FormData: FormData) => {
    const messageText = FormData.get('post-message') as string;

    addOptimisticComment(messageText);

    startTransition(async () => {
      //? Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // setComments((prev) => [
      //     ...prev,
      //     {
      //         id: new Date().getTime(),
      //         text: messageText,
      //     }
      // ])

      //! instructions to revert process to add comment
      setComments((prev) => prev);
      toast('Error while adding comment', {
        description: 'Try again later',
        duration: 10_000,
        position: 'top-right',
        action: {
          label: 'Close',
          onClick: () => toast.dismiss(),
        },
      });
    });
  };

  return (
    <div className="bg-slate-700 h-screen flex flex-col items-center justify-center">
      {/* Example Post */}
      <div className="flex flex-col items-center justify-center bg-gray-300 rounded-t-3xl p-4 w-[500px]">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop"
          alt="Instagrom"
          className="object-cover rounded-xl mb-4"
        />
        <p className="text-black font-bold mb-4">
          Look how interesting this functionality of the React API is.
        </p>
      </div>

      {/* Comments */}
      <ul className="flex flex-col items-start justify-center bg-gray-300 w-[500px] p-4">
        {optimisticComments.map((comment) => (
          <li key={comment.id} className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white text-center">A</span>
            </div>
            <p className="text-black">{comment.text}</p>
            {comment.optimistic && (
              <span className="text-gray-500 text-sm">Sending...</span>
            )}
          </li>
        ))}
      </ul>

      {/* Form and comments */}
      <form
        action={handleAddComment}
        className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4"
      >
        <input
          type="text"
          name="post-message"
          placeholder="Write a comment"
          required
          className="w-full p-2 rounded-md text-black bg-white mb-2"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};
