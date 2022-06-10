"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateManyInput_1 = require("../../../inputs/CurrencyCreateManyInput");
let CreateManyCurrencyArgs = class CreateManyCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyCreateManyInput_1.CurrencyCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCurrencyArgs.prototype, "data", void 0);
CreateManyCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCurrencyArgs);
exports.CreateManyCurrencyArgs = CreateManyCurrencyArgs;
