"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardUpdateInput_1 = require("../../../inputs/WardUpdateInput");
const WardWhereUniqueInput_1 = require("../../../inputs/WardWhereUniqueInput");
let UpdateWardArgs = class UpdateWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardUpdateInput_1.WardUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardUpdateInput_1.WardUpdateInput)
], UpdateWardArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereUniqueInput_1.WardWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardWhereUniqueInput_1.WardWhereUniqueInput)
], UpdateWardArgs.prototype, "where", void 0);
UpdateWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateWardArgs);
exports.UpdateWardArgs = UpdateWardArgs;
