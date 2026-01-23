"use client";

import React from 'react';

export default function Terms() {
  return (
    <section id='sms-terms' className="w-full bg-background pb-24 pt-24 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            SMS Terms of Use
            </h1>
            <h2 className="text-lg font-semibold text-accent-primary tracking-widest uppercase">
            Gordon & Associates Text Messaging Terms of Use
            </h2>
        </div>

        {/* Content */}
        <div className="space-y-12 text-lg/8 text-foreground/80">
            
            <p className="text-xl leading-relaxed text-foreground">
            By "Opting In" to or using a “Text Message Service” (as defined below) from Gordon & Associates, you accept these Terms & Conditions.
            </p>

            <div className="bg-second-bg/50 p-6 rounded-2xl border border-accent-secondary/20 text-sm/6">
              <p className="font-bold text-foreground mb-1">ARBITRATION NOTICE</p>
              THIS AGREEMENT IS SUBJECT TO BINDING ARBITRATION AND A WAIVER OF CLASS ACTION RIGHTS AS DETAILED BELOW.
            </div>

            <p>
            This agreement is between you and Gordon & Associates or one of its affiliates. All references to "Gordon & Associates," "we," "our," or "us" refer to Gordon & Associates, 468 N Camden Drive, Suite 400A, Beverly Hills, CA 90210.
            </p>

            <div className="space-y-8">
              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">DEFINITIONS</h3>
                  <p>
                  "Opting In," "Opt In," and "Opt-In" refer to requesting, joining, agreeing to, enrolling in, signing up for, acknowledging, responding to, or otherwise consenting to receive one or more text messages. "Text Message Service" includes any arrangement or situation in which we send one or more messages addressed to your mobile phone number, including text messages (such as SMS, MMS, or successor protocols or technologies).
                  </p>
              </section>

              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">CONSENTING TO TEXT MESSAGING</h3>
                  <p>
                  By consenting to receive text messages from us, you agreed to these Text Messaging Terms and Conditions, as well as our <span className="text-accent-primary">General T&Cs</span> and <span className="text-accent-primary">Privacy Policy</span>, incorporated herein by reference.
                  </p>
              </section>
              
              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">E-SIGN DISCLOSURE</h3>
                  <p>
                  By agreeing to receive text messages, you also consent to the use of an electronic record to document your agreement. You may withdraw your consent to the use of the electronic record by replying STOP.
                  </p>
              </section>

              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">GORDON & ASSOCIATES TEXT MESSAGE SERVICE PRIVACY POLICY</h3>
                  <p>
                  We respect your privacy. We only use information you provide through this service to transmit your mobile messages and respond to you. This includes, but isn't limited to, sharing information with platform providers, phone companies, and other vendors who assist us in the delivery of mobile messages. Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. Nonetheless, we reserve the right always to disclose any information as necessary to satisfy any law, regulation or governmental request, to avoid liability, or to protect our rights or property. This Text Message Service Privacy Policy applies to your use of the Text Message Service and isn't intended to modify our general Privacy Policy, incorporated by reference above, which may govern the relationship between you and us in other contexts.
                  </p>
              </section>

              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">COSTS OF TEXT MESSAGES</h3>
                  <p>
                  We do not charge you for the messages you send and receive via this text message service. But message and data rates may apply, so depending on your plan with your wireless or other applicable provider, you may be charged by your carrier or other applicable provider.
                  </p>
              </section>

              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">FREQUENCY OF TEXT MESSAGES</h3>
                  <p>
                  This Text Messaging Service is for conversational person-to-person communication between you and our employees. We may send you an initial message providing details about the service. After that, the number of text messages you receive will vary depending on how you use our services and whether you take steps to generate more text messages from us (such as by sending a HELP request).
                  </p>
              </section>

              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">OPTING OUT OF TEXT MESSAGES</h3>
                  <p>
                  If you no longer want to receive text messages, you may reply to any text message with STOP, QUIT, END, REVOKE, OPT OUT, CANCEL, or UNSUBSCRIBE. As a person-to-person communication service, opt-out requests are specific to each conversation between you and one of our employees and their associated phone number. After unsubscribing, we may send you confirmation of your opt-out via text message.
                  </p>
              </section>

              <section>
                  <h3 className="text-xl font-bold text-foreground mb-3">CONTACT US</h3>
                  <p>
                  For support, contact us at <a href="mailto:info@gordonandassociates.biz" className="text-accent-primary hover:underline">info@gordonandassociates.biz</a>.
                  </p>
              </section>

              
            </div>

        </div>
      </div>
    </section>
  );
}
