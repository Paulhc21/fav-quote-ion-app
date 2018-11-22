export class SettingsService {
    private isActive: boolean = false;

    onChgSettings(toggleState: boolean) {
        this.isActive = toggleState;
    }

    isChgSettings() {
        return this.isActive;
    }

}
