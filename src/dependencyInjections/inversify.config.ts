import { Container } from 'inversify'
import { TYPES } from '@/dependencyInjections/Types'
import { IHogeEventProvider } from '@/interfaces/IHogeEventProvider'
import { HogeEventProvider } from '@/implements/HogeEventProvider'

const myContainer = new Container()
myContainer.bind<IHogeEventProvider>(TYPES.IHogeEventProvider).to(HogeEventProvider).inSingletonScope()

export { myContainer }