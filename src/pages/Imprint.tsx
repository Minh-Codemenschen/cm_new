import Header from "../components/Header";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-secondary mb-8">Imprint</h1>
        <div className="max-w-4xl mx-auto text-left">
          <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Codemenschen GmbH</h2>
              <address className="not-italic space-y-2 text-gray-600">
                <p>Anton Hubmann Platz 1/6,</p>
                <p>8077 Gössendorf</p>
                <p>Firmenbuchnummer: FN 543274 h</p>
                <p>
                  Email:{" "}
                  <a href="mailto:office@codemenschen.at" className="text-blue-600 hover:underline">
                    office@codemenschen.at
                  </a>
                </p>
              </address>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Terms of Service Agreement</h2>
              <h3 className="text-xl mb-4">Welcome to WP-Sofa.chat</h3>
              <p className="mb-4">For the Use of Codemenschen GmbH's Platform Services</p>

              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold">1. Scope of Contract and Validity</h3>
                  <p>1.1. These General Terms and Conditions (GTC) apply to all services provided through the platform(wp-sofa.chat) operated by Codemenschen GmbH, accessible at the domain specified by the company. This platform facilitates a unique process where users can create tasks, communicate regarding these tasks, receive offers, and utilize a credit-based system for payment.</p>
                  <p>1.2. All orders and agreements are legally binding when signed with the legally binding signature of Codemenschen GmbH and oblige only to the extent stated in the order acceptance. Client purchase conditions are excluded for the legal transaction and the entire business relationship. Offers are non-binding.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">2. Scope and Assessment</h3>
                  <p>2.1. Services provided through the platform may include, but are not limited to:</p>
                  <ul>
                    <li>Task creation and communication.</li>
                    <li>Receiving and confirming offers.</li>
                    <li>Credit-based payment for services.</li>
                  </ul>
                  <p>2.2. The development and provision of these services are dependent on the complete and accurate information, documents, and resources provided by the Client. The platform’s functionality is designed to support the efficient execution of these tasks, relying on user engagement and the provision of necessary details for task completion.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">3. Prices, Taxes, and Fees</h3>
                  <p>3.1. All prices shall be calculated in Euros or Dollars, depending on the currency selected by the user at the time of sign-up. This choice will apply to all transactions for the respective current order. All prices mentioned are quoted from the place of business of the Contractor. Expenses for program media (e.g., CDs, magnetic tapes, hard disks, etc.), as well as documents and possible contract fees, shall be invoiced separately.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">4. Delivery Date</h3>
                  <p>4.1. The Contractor offers two delivery speeds for the completion of tasks: normal and fast. The client may select their preferred delivery speed at the time of accepting an offer. While the Contractor shall strive to meet the agreed deadlines for both delivery speeds as closely as possible, it is understood that these deadlines are approximate and are subject to fair use principles.</p>
                  <p>4.2. The successful execution of services largely depends on the Client providing all necessary information and cooperation within the agreed timelines. The Contractor commits to communicating any significant deviations from these approximate delivery dates as early as possible to ensure transparency and manage client expectations effectively.</p>
                  <p>4.3. The selection of fast delivery may incur additional costs, reflecting the expedited service. These costs will be clearly stated in the offer, allowing the Client to make an informed decision.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">5. Payment</h3>
                  <p>5.1. Payments for services obtained through the platform are facilitated through a credit-based system. Clients can preload credits into their account, which can be subsequently used to confirm and accept offers for tasks.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">6. Copyright and usage</h3>
                  <p>6.1. After payment of the remuneration agreed, the Contractor shall grant the Client a non-exclusive, non-transferrable, non-sub-licensable and indefinite right to use the software for the hardware specified in the contract to the extent of the purchased licenses, for the simultaneous usage thereof at several work places and the right to use all work results based on the contract of the Contractor for in-house use. The Contractor shall retain all other rights. Involvement of the Client in the creation of software shall not entitle them to acquire any rights beyond use of the product as set forth in the Contract. Each infringement of the copyright of the Contractor shall result in claims for damages, in which case full amends are to be made.</p>
                  <p>6.2. The Client shall be permitted to make copies for archiving and data security purposes subject to the condition that the software contains no express ban of the licensor or a third party, and that all copyright and ownership notices shall be transferred to the copies without alteration.</p>
                  <p>6.3. Should the disclosure of the interfaces be necessary to produce the interoperability of the software covered by this Contract, the Client shall separately request this from the Contractor for a fee. Should the Contractor not meet this request and decompilation take place according to the Austrian Federal Law on Copyright, the results shall only be used to establish interoperability. Malpractice shall lead to damages.</p>
                  <p>6.4. Should the Contractor provide the Client with software, whose licensee is a third party (e.g. standard software by Microsoft), the right of usage shall be provided by the license conditions of the licensee (manufacturer).</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">7. Right of withdrawal</h3>
                  <p>7.1. The Client shall be entitled to withdraw from a respective order by letter sent by registered post, should the agreed delivery deadline not be met due to the sole fault or illegal actions of the Contractor provided that the agreed service is not performed to a considerable extent within an adequate grace period and the Client is not at fault.</p>
                  <p>7.2. Force majeure, work conflicts, natural disasters and transport bans, as well as other circumstances outside of the influence of the Contractor, shall release the Contractor from their obligation to delivery and/or shall allow them to determine a new delivery deadline.</p>
                  <p>7.3. It shall only be possible for the Client to cancel an order with written consent of the Contractor. Should the Contractor agree to cancelation of an order, they shall be entitled to charge a cancellation fee to the amount of 30% of the overall project order value not yet invoiced in addition to the services already rendered and costs incurred.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">8. Guarantee, maintenance, changes</h3>
                  <p>8.1. The Contractor shall guarantee that the software fulfils the functions according to the respective documentation insofar as the software is used on the operating system stipulated in the contract.</p>
                  <p>8.2.1. Prerequisites for error correction shall be that:</p>
                  <ul>
                    <li>The Client sufficiently describes the error in an error message and that this is definable for the Contractor.</li>
                    <li>The Client provides the Contractor with all documents necessary for the correction of the error.</li>
                    <li>The software is used according to the designated conditions of use as stipulated in the documentation.</li>
                  </ul>
                  <p>8.2.2. With regard to guarantee, rectification shall, in any case, prevail over price reduction or redhibitory action. Should a notice of defects be justified, the deficiencies shall be rectified within an adequate period, in which the Client shall enable the Contractor for all measures necessary for examination and rectification. Section 924 of the Austrian Civil Code ‘Assumption of Deficiency’ shall be excluded.</p>
                  <p>8.2.3. The Contractor shall, free of charge, implement corrections and additions, which become necessary due to organisational and technical defects of the programme, until transferral of the agreed services, insofar as these are attributable to the Contractor.</p>
                  <p>8.3. The Client shall bear the costs for assistance, incorrect diagnosis, correction of errors and emergency maintenance attributable to the Client as well as other corrections, changes and additions. This shall also apply to rectification of deficiencies, should the Client or a third party make programme changes, additions and other interferences.</p>
                  <p>8.4. Furthermore, the Contractor shall not be liable for errors, disruptions or damage caused by improper use, changes in components of the operating system, interfaces or parameters, the use of inadequate organisational means or data storage media (as far as these are required), abnormal operating conditions (particularly deviations of installation and storage conditions) or transport damage.</p>
                  <p>8.5. The Client shall lose any guarantee from the Contractor for programmes that are retrospectively changed by in-house software engineers or third parties.</p>
                  <p>8.6. Insofar as changing or adding to existing programmes forms the subject matter of an order, the guarantee shall apply to the change or addition. The guarantee for the original programme shall not be renewed by this.</p>
                  <p>8.7. Guarantee claims shall lapse after six (6) months from transferral.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">9. Liability</h3>
                  <p>9.1. The Contractor shall only be liable to the Client for damage the Contractor verifiably causes in cases of gross negligence. This shall also apply mutatis mutandis to damage caused by third parties brought in by the Contractor. In case of bodily injuries caused by the Contractor, the Contractor shall be liable without limitation.</p>
                  <p>9.2.1. Liability for indirect damage, e.g. loss of profit, costs related to interruptions, data losses or claims of third parties, shall be expressly excluded.</p>
                  <p>9.3. Claims for damages shall lapse according to legal provisions, however, at the latest after one year starting from the knowledge of the damage and the person responsible for this.</p>
                  <p>9.4. Should the Contractor fulfil work with the assistance of a third party and any guarantee and/or liability claims arise against this third party therefrom, the Contractor shall cede those claims to the Client. In such cases, the Client shall focus on this third party.</p>
                  <p>9.5. Should data backup be expressly agreed upon as a service, liability for the loss of data shall not be excluded, deviating from Clause 9.2, however, restoration of the data shall be limited to a maximum of 10% of the total order sum per case of damage, however, with an overall maximum of EUR 15,000. Further claims for damages and guarantees of the Client than those stipulated in this Contract shall be excluded, regardless of legal basis.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">10. Loyalty</h3>
                  <p>10.1. The contractual partners agree to mutual loyalty. Both shall refrain from headhunting and employing, even via third parties, employees of the respective other contractual partner, who work on the fulfilment of orders, for the term of contract and twelve months after the contract terminates. Any contractual partner infringing this clause shall be obligated to pay lump-sum indemnification to the amount of one annual salary of the employee.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">11. Non-disclosure</h3>
                  <p>11.1. The Contractor shall obligate their employees to fulfil the provisions stipulated in Section 6 of the Austrian Data Protection Act.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">12. Miscellaneous</h3>
                  <p>12.1. Should clauses of this Contract be or become invalid, this shall not affect the validity of remaining subject matter of the Contract. The contractual partners shall cooperate in order to find a regulation which comes as close as possible to the intention of the invalid clauses.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">13. Final Provisions</h3>
                  <p>13.1. Insofar as nothing else is agreed on, only the legal provisions regarding business-to-business transactions according to Austrian law shall apply, even if the order is implemented abroad. The local jurisdiction of the objectively competent court for the place of business of the Contractor shall be exclusively agreed upon for possible disputes. Pursuant to the Austrian Consumer Protection Law (KSchG), the Terms and Conditions above shall be valid insofar as the Austrian Consumer Protection Law provides no differing obligatory provisions for selling to consumers.</p>
                  <p>13.2. Should any provision of this agreement be invalid or unenforceable, the remaining provisions shall remain in effect. The parties commit to replacing any invalid or unenforceable provision with a valid and enforceable provision that most closely achieves the original purpose and economic intent of the invalid or unenforceable provision.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">14. Use of Email Addresses for Marketing</h3>
                  <p>14.1. By signing up for services provided through the WP Sofa platform, the Client agrees that Codemenschen GmbH may use the email address provided at registration for the purpose of sending marketing communications. This includes special offers, updates, and promotional content related to WP Sofa services and products.</p>
                  <p>14.2. The Client has the right to opt-out of receiving marketing emails at any time. This can be done by clicking the unsubscribe link located at the bottom of each marketing email or by contacting Codemenschen GmbH directly to request removal from the marketing email list.</p>
                  <p>14.3. Codemenschen GmbH is committed to protecting the privacy and security of our clients’ information. The use of email addresses for marketing purposes will be conducted in compliance with applicable data protection laws and regulations.</p>
                </section>

                <section>
                  <p className="text-sm text-gray-600">
                    The Austrian Professional Association for Consulting and IT recommends the following mediation clause as a pro-business method of dispute resolution:
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    In the event that any disputes, which cannot be solved by mutual agreement, arise from this Contract, the parties to the contract agree to engage a listed mediator (Austrian Civil Rights Mediation Law (ZivMediatG) specialized in business mediation from the list of the Austrian Ministry of Justice in order to reconcile these out of court.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
