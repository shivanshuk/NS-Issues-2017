"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Country = (function () {
    function Country(Country, Amount, SecondVal, ThirdVal, Impact, Year) {
        this.Country = Country;
        this.Amount = Amount;
        this.SecondVal = SecondVal;
        this.ThirdVal = ThirdVal;
        this.Impact = Impact;
        this.Year = Year;
    }
    return Country;
}());
exports.Country = Country;
var ItemService = (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: "Ter Stegen", role: "Goalkeeper" }, { id: 3, name: "Piqué", role: "Defender" }, { id: 4, name: "I. Rakitic", role: "Midfielder" }, { id: 5, name: "Sergio", role: "Midfielder" }, { id: 6, name: "Denis Suárez", role: "Midfielder" }, { id: 7, name: "Arda", role: "Midfielder" }, { id: 8, name: "A. Iniesta", role: "Midfielder" }, { id: 9, name: "Suárez", role: "Forward" }, { id: 10, name: "Messi", role: "Forward" }, { id: 11, name: "Neymar", role: "Forward" }, { id: 12, name: "Rafinha", role: "Midfielder" }, { id: 13, name: "Cillessen", role: "Goalkeeper" }, { id: 14, name: "Mascherano", role: "Defender" }, { id: 17, name: "Paco Alcácer", role: "Forward" }, { id: 18, name: "Jordi Alba", role: "Defender" }, { id: 19, name: "Digne", role: "Defender" }, { id: 20, name: "Sergi Roberto", role: "Midfielder" }, { id: 21, name: "André Gomes", role: "Midfielder" }, { id: 22, name: "Aleix Vidal", role: "Midfielder" }, { id: 23, name: "Umtiti", role: "Defender" }, { id: 24, name: "Mathieu", role: "Defender" }, { id: 25, name: "Masip", role: "Goalkeeper" });
    }
    ItemService.prototype.getCategoricalSource = function () {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    };
    // << chart-angular-categorical-source
    ItemService.prototype.getCategoricalSource2 = function () {
        return [
            { Country: "Germany", Amount: 29, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 32, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 33, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 28, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 22, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    };
    ItemService.prototype.getCategoricalSource3 = function () {
        return [
            { Country: "Germany", Amount: 35, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "France", Amount: 38, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
            { Country: "Bulgaria", Amount: 40, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
            { Country: "Spain", Amount: 36, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
            { Country: "USA", Amount: 42, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
        ];
    };
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable()
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDO0lBQ0ksaUJBQW1CLE9BQWdCLEVBQVMsTUFBZSxFQUFTLFNBQWtCLEVBQVMsUUFBaUIsRUFBUyxNQUFlLEVBQVMsSUFBYTtRQUEzSSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFTLFNBQUksR0FBSixJQUFJLENBQVM7SUFDOUosQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLDBCQUFPO0FBTXBCO0lBREE7UUFpQ1ksVUFBSyxHQUFHLElBQUksS0FBSyxDQUNyQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDMUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzdDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDbkQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUMzQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDMUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUMxQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQzNDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDL0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ2hELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUNoRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzNDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDckQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNuRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ25ELEVBQUUsRUFB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ZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBDb3VudHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgQ291bnRyeT86IHN0cmluZywgcHVibGljIEFtb3VudD86IG51bWJlciwgcHVibGljIFNlY29uZFZhbD86IG51bWJlciwgcHVibGljIFRoaXJkVmFsPzogbnVtYmVyLCBwdWJsaWMgSW1wYWN0PzogbnVtYmVyLCBwdWJsaWMgWWVhcj86IG51bWJlcikge1xuICAgIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICAgIGdldENhdGVnb3JpY2FsU291cmNlKCk6IENvdW50cnlbXSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiR2VybWFueVwiLCBBbW91bnQ6IDE1LCBTZWNvbmRWYWw6IDE0LCBUaGlyZFZhbDogMjQsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgeyBDb3VudHJ5OiBcIkZyYW5jZVwiLCBBbW91bnQ6IDEzLCBTZWNvbmRWYWw6IDIzLCBUaGlyZFZhbDogMjUsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgeyBDb3VudHJ5OiBcIkJ1bGdhcmlhXCIsIEFtb3VudDogMjQsIFNlY29uZFZhbDogMTcsIFRoaXJkVmFsOiAyMywgSW1wYWN0OiAwLCBZZWFyOiAwIH0sXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiU3BhaW5cIiwgQW1vdW50OiAxMSwgU2Vjb25kVmFsOiAxOSwgVGhpcmRWYWw6IDI0LCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgIHsgQ291bnRyeTogXCJVU0FcIiwgQW1vdW50OiAxOCwgU2Vjb25kVmFsOiA4LCBUaGlyZFZhbDogMjEsIEltcGFjdDogMCwgWWVhcjogMCB9XG4gICAgICAgIF07XG4gICAgfVxuICAgIC8vIDw8IGNoYXJ0LWFuZ3VsYXItY2F0ZWdvcmljYWwtc291cmNlXG4gICAgZ2V0Q2F0ZWdvcmljYWxTb3VyY2UyKCk6IENvdW50cnlbXSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiR2VybWFueVwiLCBBbW91bnQ6IDI5LCBTZWNvbmRWYWw6IDE0LCBUaGlyZFZhbDogMjQsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgeyBDb3VudHJ5OiBcIkZyYW5jZVwiLCBBbW91bnQ6IDMyLCBTZWNvbmRWYWw6IDIzLCBUaGlyZFZhbDogMjUsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgeyBDb3VudHJ5OiBcIkJ1bGdhcmlhXCIsIEFtb3VudDogMzMsIFNlY29uZFZhbDogMTcsIFRoaXJkVmFsOiAyMywgSW1wYWN0OiAwLCBZZWFyOiAwIH0sXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiU3BhaW5cIiwgQW1vdW50OiAyOCwgU2Vjb25kVmFsOiAxOSwgVGhpcmRWYWw6IDI0LCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgIHsgQ291bnRyeTogXCJVU0FcIiwgQW1vdW50OiAyMiwgU2Vjb25kVmFsOiA4LCBUaGlyZFZhbDogMjEsIEltcGFjdDogMCwgWWVhcjogMCB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcmljYWxTb3VyY2UzKCk6IENvdW50cnlbXSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiR2VybWFueVwiLCBBbW91bnQ6IDM1LCBTZWNvbmRWYWw6IDE0LCBUaGlyZFZhbDogMjQsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgeyBDb3VudHJ5OiBcIkZyYW5jZVwiLCBBbW91bnQ6IDM4LCBTZWNvbmRWYWw6IDIzLCBUaGlyZFZhbDogMjUsIEltcGFjdDogMCwgWWVhcjogMCB9LFxuICAgICAgICAgICAgeyBDb3VudHJ5OiBcIkJ1bGdhcmlhXCIsIEFtb3VudDogNDAsIFNlY29uZFZhbDogMTcsIFRoaXJkVmFsOiAyMywgSW1wYWN0OiAwLCBZZWFyOiAwIH0sXG4gICAgICAgICAgICB7IENvdW50cnk6IFwiU3BhaW5cIiwgQW1vdW50OiAzNiwgU2Vjb25kVmFsOiAxOSwgVGhpcmRWYWw6IDI0LCBJbXBhY3Q6IDAsIFllYXI6IDAgfSxcbiAgICAgICAgICAgIHsgQ291bnRyeTogXCJVU0FcIiwgQW1vdW50OiA0MiwgU2Vjb25kVmFsOiA4LCBUaGlyZFZhbDogMjEsIEltcGFjdDogMCwgWWVhcjogMCB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPihcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJUZXIgU3RlZ2VuXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiUGlxdcOpXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkkuIFJha2l0aWNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogXCJTZXJnaW9cIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNiwgbmFtZTogXCJEZW5pcyBTdcOhcmV6XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiQXJkYVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA4LCBuYW1lOiBcIkEuIEluaWVzdGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogOSwgbmFtZTogXCJTdcOhcmV6XCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDEwLCBuYW1lOiBcIk1lc3NpXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDExLCBuYW1lOiBcIk5leW1hclwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgICAgICB7IGlkOiAxMiwgbmFtZTogXCJSYWZpbmhhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDEzLCBuYW1lOiBcIkNpbGxlc3NlblwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgICAgICB7IGlkOiAxNCwgbmFtZTogXCJNYXNjaGVyYW5vXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiAxNywgbmFtZTogXCJQYWNvIEFsY8OhY2VyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDE4LCBuYW1lOiBcIkpvcmRpIEFsYmFcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE5LCBuYW1lOiBcIkRpZ25lXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMCwgbmFtZTogXCJTZXJnaSBSb2JlcnRvXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIxLCBuYW1lOiBcIkFuZHLDqSBHb21lc1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMiwgbmFtZTogXCJBbGVpeCBWaWRhbFwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiAyMywgbmFtZTogXCJVbXRpdGlcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDI0LCBuYW1lOiBcIk1hdGhpZXVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDI1LCBuYW1lOiBcIk1hc2lwXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgKTtcblxuICAgIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19