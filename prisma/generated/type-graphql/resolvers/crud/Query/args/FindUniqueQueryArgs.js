"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryWhereUniqueInput_1 = require("../../../inputs/QueryWhereUniqueInput");
let FindUniqueQueryArgs = class FindUniqueQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], FindUniqueQueryArgs.prototype, "where", void 0);
FindUniqueQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueQueryArgs);
exports.FindUniqueQueryArgs = FindUniqueQueryArgs;
