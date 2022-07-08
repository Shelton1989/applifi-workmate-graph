"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
let FindUniqueRequestArgs = class FindUniqueRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], FindUniqueRequestArgs.prototype, "where", void 0);
FindUniqueRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRequestArgs);
exports.FindUniqueRequestArgs = FindUniqueRequestArgs;
