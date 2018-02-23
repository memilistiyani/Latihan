import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { TransferPage } from '../transfer/transfer';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilPage;
  tab2Root = TransferPage;
  tab3Root = ListPage;

  constructor() {

  }
}
