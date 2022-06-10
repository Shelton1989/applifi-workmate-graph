"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyUpdateManyMutationInput_1 = require("../../../inputs/CurrencyUpdateManyMutationInput");
const CurrencyWhereInput_1 = require("../../../inputs/CurrencyWhereInput");
let UpdateManyCurrencyArgs = class UpdateManyCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateManyMutationInput_1.CurrencyUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateManyMutationInput_1.CurrencyUpdateManyMutationInput)
], UpdateManyCurrencyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereInput_1.CurrencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereInput_1.CurrencyWhereInput)
], UpdateManyCurrencyArgs.prototype, "where", void 0);
UpdateManyCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCurrencyArgs);
exports.UpdateManyCurrencyArgs = UpdateManyCurrencyArgs;
