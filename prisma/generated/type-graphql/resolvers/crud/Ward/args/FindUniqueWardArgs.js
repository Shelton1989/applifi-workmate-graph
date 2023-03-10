"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardWhereUniqueInput_1 = require("../../../inputs/WardWhereUniqueInput");
let FindUniqueWardArgs = class FindUniqueWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereUniqueInput_1.WardWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardWhereUniqueInput_1.WardWhereUniqueInput)
], FindUniqueWardArgs.prototype, "where", void 0);
FindUniqueWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueWardArgs);
exports.FindUniqueWardArgs = FindUniqueWardArgs;
