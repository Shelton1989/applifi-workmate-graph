"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardUpdateManyMutationInput_1 = require("../../../inputs/WardUpdateManyMutationInput");
const WardWhereInput_1 = require("../../../inputs/WardWhereInput");
let UpdateManyWardArgs = class UpdateManyWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardUpdateManyMutationInput_1.WardUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardUpdateManyMutationInput_1.WardUpdateManyMutationInput)
], UpdateManyWardArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereInput_1.WardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereInput_1.WardWhereInput)
], UpdateManyWardArgs.prototype, "where", void 0);
UpdateManyWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWardArgs);
exports.UpdateManyWardArgs = UpdateManyWardArgs;
