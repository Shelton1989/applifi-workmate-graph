"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryWhereUniqueInput_1 = require("../../../inputs/QueryWhereUniqueInput");
let DeleteQueryArgs = class DeleteQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], DeleteQueryArgs.prototype, "where", void 0);
DeleteQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteQueryArgs);
exports.DeleteQueryArgs = DeleteQueryArgs;
