const Accordian = () => {
    return (
        <div className="flex justify-center">
            <div className="join join-vertical w-full lg:w-[60%]">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-lg font-medium">
      <h1>How do I create and assign tasks to my friends on the website?</h1>
    </div>
    <div className="collapse-content"> 
      <p>To create and assign tasks, simply navigate to the task management section on the website. From there, you can create new tasks, set deadlines, and assign them to specific friends within your group</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-lg font-medium">
    <h1>Can I track the progress of assigned tasks?</h1>
    </div>
    <div className="collapse-content"> 
      <p>Yes, you can easily track the progress of assigned tasks. The website provides real-time updates on task status, allowing you to see who has completed their tasks and monitor overall progress towards project deadlines.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-lg font-medium">
      <h1>Is there a feature for collaborative document editing?</h1>
    </div>
    <div className="collapse-content"> 
      <p>Absolutely! Our website offers collaborative document editing tools, allowing friends to work together on assignments in real-time. Simply upload the document to the platform, and multiple users can edit it simultaneously, making collaboration seamless.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-lg font-medium">
      <h1>How can I schedule group study sessions or meetings?</h1>
    </div>
    <div className="collapse-content"> 
      <p>You can schedule group study sessions and meetings using the website`s integrated calendar feature. Simply select the date and time for the session, invite your friends, and the website will send out reminders to ensure everyone is on the same page.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-lg font-medium">
      <h1>Are there discussion forums for academic support and brainstorming?</h1>
    </div>
    <div className="collapse-content"> 
      <p>Yes, the website includes discussion forums where friends can engage in academic discussions, ask questions, and brainstorm ideas. It`s a great platform for sharing insights, seeking clarification, and collaborating on assignments.
</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-lg font-medium">
      <h1>Can I customize privacy settings for my assignments and group activities?</h1>
    </div>
    <div className="collapse-content"> 
      <p>Absolutely! Our website offers customizable privacy settings, allowing you to control who can view your assignments and group activities. Whether you want to keep things private among friends or share them with a wider audience, the choice is yours.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordian;