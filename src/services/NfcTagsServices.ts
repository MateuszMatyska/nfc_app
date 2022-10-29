import NfcManager, {NfcTech, Ndef, TagEvent} from 'react-native-nfc-manager';

export const readTag = async () => {
  NfcManager.start();
  let tagResult: TagEvent | undefined;

  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    const tag = await NfcManager.getTag();
    if (tag) {
      tagResult = tag;
    }
  } catch (ex) {
    console.warn('Oops!', ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }

  return tagResult;
};

export const writeTag = async (message: string) => {
  let result = false;

  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    const bytes = Ndef.encodeMessage([Ndef.textRecord(message)]);

    if (bytes) {
      await NfcManager.ndefHandler.writeNdefMessage(bytes);
      result = true;
    }
  } catch (ex) {
    console.warn(ex);
  } finally {
    NfcManager.cancelTechnologyRequest();
  }

  return result;
};
