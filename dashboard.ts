/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as ko from 'knockout';
import 'ojs/ojknockout';
import 'ojs/ojinputtext';

import Message = require("ojs/ojmessaging");
import "oj-c/input-number";
import "oj-c/form-layout";
import "ojs/ojknockout";
import "oj-c/input-text";
import 'oj-c/input-password';
import 'oj-c/input-date-text';
import "oj-c/radioset";
import 'oj-c/checkbox';
import 'ojs/ojselectcombobox';
import 'ojs/ojprogress-bar';
import { ojMessage } from 'ojs/ojmessage';
import "oj-c/button";
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import { ojButton } from 'ojs/ojbutton';

class DashboardViewModel {
  laptopOptions: Array<{ value: string; label: string }>;
  readonly progressValue = ko.observable(20);
  messages: ojMessage.Message[];
  messagesDataprovider: ArrayDataProvider<null, ojMessage.Message>;


  constructor(){
    this.laptopOptions = [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ];
    const isoTimeNow = new Date().toISOString();
    const isoTimeYesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    this.messages = [
      {
        severity: 'error',
        summary: 'Error message summary',
        detail: 'Error message detail',
        timestamp: isoTimeNow
      }
    ];

    this.messagesDataprovider = new ArrayDataProvider([]);

  }
  public buttonAction = (event: ojButton.ojAction) => {
    this.messagesDataprovider = new ArrayDataProvider(this.messages);
    return true;
  };
  







}
export = DashboardViewModel;