import { Button } from '@/components/button'
import { Icons } from '@/components/icons'
import * as Dialog from '@radix-ui/react-dialog'
import './style.css'

export const DialogAddPlan = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="default"
          size="sm"
          className="ml-auto flex h-8 gap-1">
          <Icons.add size={16} />
          Add Plan
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you re done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label
              className="Label"
              htmlFor="name">
              Name
            </label>
            <input
              className="Input"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label
              className="Label"
              htmlFor="username">
              Username
            </label>
            <input
              className="Input"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end'
            }}>
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="IconButton"
              aria-label="Close">
              <Icons.close />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
