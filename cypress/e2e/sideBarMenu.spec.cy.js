import { onSideBarMenu } from "../support/pages/sideBarPage"

describe('Sidebar Menu', () => {

  beforeEach('Login as standard user', () => {
      cy.openLoginPage()
      cy.loginAsStandardUser()
    })

    it('Open sidebar clicking on the burger menu', () => {
      onSideBarMenu.openCloseSideBarMenu()
    })

    it('Checks sidebar menu items', () => {
      onSideBarMenu.openCloseSideBarMenu()
      onSideBarMenu.sideBarMenuItems()
    })
  })