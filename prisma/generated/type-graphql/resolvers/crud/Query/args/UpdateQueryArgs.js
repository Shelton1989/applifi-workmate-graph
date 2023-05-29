"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryUpdateInput_1 = require("../../../inputs/QueryUpdateInput");
const QueryWhereUniqueInput_1 = require("../../../inputs/QueryWhereUniqueInput");
let UpdateQueryArgs = class UpdateQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateInput_1.QueryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateInput_1.QueryUpdateInput)
], UpdateQueryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], UpdateQueryArgs.prototype, "where", void 0);
UpdateQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateQueryArgs);
exports.UpdateQueryArgs = UpdateQueryArgs;
